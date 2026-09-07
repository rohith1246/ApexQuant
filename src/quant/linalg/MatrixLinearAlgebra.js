/**
 * MatrixLinearAlgebra.js - High-Performance Linear Algebra & Covariance Matrix Decomposition Suite
 * Part of ApexQuant Institutional Quantitative Suite
 */

class MatrixLinearAlgebra {
  /**
   * Creates an M x N matrix initialized to zero or specified value
   */
  static zeros(rows, cols) {
    const mat = new Array(rows);
    for (let i = 0; i < rows; i++) {
      mat[i] = new Float64Array(cols);
    }
    return mat;
  }

  static identity(n) {
    const mat = this.zeros(n, n);
    for (let i = 0; i < n; i++) mat[i][i] = 1.0;
    return mat;
  }

  static transpose(A) {
    const rows = A.length;
    const cols = A[0].length;
    const res = this.zeros(cols, rows);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        res[j][i] = A[i][j];
      }
    }
    return res;
  }

  static multiply(A, B) {
    const rA = A.length;
    const cA = A[0].length;
    const rB = B.length;
    const cB = B[0].length;

    if (cA !== rB) {
      throw new Error(`Matrix dimensions mismatch for multiplication: (${rA}x${cA}) * (${rB}x${cB})`);
    }

    const res = this.zeros(rA, cB);
    for (let i = 0; i < rA; i++) {
      for (let k = 0; k < cA; k++) {
        const a_ik = A[i][k];
        for (let j = 0; j < cB; j++) {
          res[i][j] += a_ik * B[k][j];
        }
      }
    }
    return res;
  }

  /**
   * Cholesky Decomposition: A = L * L^T for positive-definite symmetric covariance matrices.
   * Essential for correlated Monte Carlo multi-asset asset simulation.
   */
  static cholesky(A) {
    const n = A.length;
    const L = this.zeros(n, n);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        let sum = 0;
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k];
        }

        if (i === j) {
          const val = A[i][i] - sum;
          if (val <= 0) {
            // Apply slight jitter for numerical positive definiteness
            L[i][j] = Math.sqrt(Math.max(1e-12, val));
          } else {
            L[i][j] = Math.sqrt(val);
          }
        } else {
          L[i][j] = (A[i][j] - sum) / (L[j][j] || 1e-12);
        }
      }
    }

    return L;
  }

  /**
   * Sample Covariance Matrix from asset returns (N assets x T time periods)
   */
  static sampleCovariance(returnsMatrix) {
    const nAssets = returnsMatrix.length;
    const tPeriods = returnsMatrix[0].length;

    const means = new Float64Array(nAssets);
    for (let i = 0; i < nAssets; i++) {
      let sum = 0;
      for (let t = 0; t < tPeriods; t++) sum += returnsMatrix[i][t];
      means[i] = sum / tPeriods;
    }

    const cov = this.zeros(nAssets, nAssets);
    for (let i = 0; i < nAssets; i++) {
      for (let j = i; j < nAssets; j++) {
        let sum = 0;
        for (let t = 0; t < tPeriods; t++) {
          sum += (returnsMatrix[i][t] - means[i]) * (returnsMatrix[j][t] - means[j]);
        }
        const val = sum / (tPeriods - 1);
        cov[i][j] = val;
        cov[j][i] = val;
      }
    }

    return cov;
  }

  /**
   * Ledoit-Wolf Shrinkage Covariance Estimator
   * Shrinks the empirical sample covariance toward constant correlation target.
   */
  static ledoitWolfShrinkage(sampleCov) {
    const n = sampleCov.length;
    const variances = new Float64Array(n);
    for (let i = 0; i < n; i++) variances[i] = sampleCov[i][i];

    // Compute average correlation target
    let avgCorr = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const corr = sampleCov[i][j] / Math.sqrt(variances[i] * variances[j]);
        avgCorr += corr;
        count++;
      }
    }
    avgCorr = count > 0 ? avgCorr / count : 0;

    // Construct prior target matrix F
    const F = this.zeros(n, n);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) {
          F[i][j] = variances[i];
        } else {
          F[i][j] = avgCorr * Math.sqrt(variances[i] * variances[j]);
        }
      }
    }

    // Shrinkage intensity delta (heuristic default 0.20 for robust conditioning)
    const delta = 0.20;
    const shrunk = this.zeros(n, n);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        shrunk[i][j] = (1 - delta) * sampleCov[i][j] + delta * F[i][j];
      }
    }

    return shrunk;
  }

  /**
   * Jacobi Eigenvalue Algorithm for real symmetric matrices
   */
  static jacobiEigenvalues(A, maxIterations = 50) {
    const n = A.length;
    let V = this.identity(n);
    let D = this.zeros(n, n);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) D[i][j] = A[i][j];
    }

    for (let iter = 0; iter < maxIterations; iter++) {
      let maxOff = 0;
      let p = 0;
      let q = 1;

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (Math.abs(D[i][j]) > maxOff) {
            maxOff = Math.abs(D[i][j]);
            p = i;
            q = j;
          }
        }
      }

      if (maxOff < 1e-10) break;

      const theta = 0.5 * Math.atan2(2 * D[p][q], D[q][q] - D[p][p]);
      const c = Math.cos(theta);
      const s = Math.sin(theta);

      const J = this.identity(n);
      J[p][p] = c;
      J[p][q] = -s;
      J[q][p] = s;
      J[q][q] = c;

      const JT = this.transpose(J);
      D = this.multiply(this.multiply(JT, D), J);
      V = this.multiply(V, J);
    }

    const eigenvalues = new Float64Array(n);
    for (let i = 0; i < n; i++) eigenvalues[i] = D[i][i];

    return { eigenvalues, eigenvectors: V };
  }
}

module.exports = MatrixLinearAlgebra;
