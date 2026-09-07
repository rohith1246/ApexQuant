# ApexQuant

Institutional Quantitative Trading & Risk Engine

---

## Installation

```bash
cd ApexQuant
npm install
```

---

## Build

```bash
npm run build
docker build -t apexquant:latest .
```

---

## Run

```bash
npm start
docker-compose up -d
```

---

## Dependencies

- **Runtime**: Node.js Standard Library (>= 18.0.0)
- **Architecture**: Modular domain engines with zero external unverified dependencies

---

## Usage

Access the application and endpoints locally on port **4000**.

---

## Testing & Coverage

```bash
npm test
npm run test:coverage
```


# ⚡ ApexQuant: Institutional Quantitative Trading & High-Frequency Risk Engine

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/rohith1246/ApexQuant)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](#license)
[![Coverage](https://img.shields.io/badge/coverage-100%25-success.svg)](https://github.com/rohith1246/ApexQuant)
[![Architecture](https://img.shields.io/badge/architecture-Microservices%20%2F%20L2--L3%20LOB-orange.svg)](#architecture)

ApexQuant is an ultra-low latency, deterministic quantitative finance trading platform and risk simulation engine engineered for institutional electronic trading desks, market makers, and statistical arbitrage funds.

---

## 🏛️ System Architecture

```text
               +-------------------------------------------------------+
               |             FIX 4.4 / WebSocket Gateway               |
               +-------------------------------------------------------+
                                           |
                                           v
               +-------------------------------------------------------+
               |       Deterministic Price-Time Matching Engine        |
               +-------------------------------------------------------+
                          |                                 |
                          v                                 v
        +-----------------------------------+    +--------------------+
        |   L2/L3 Limit Order Book (LOB)   |    | Algorithmic TWAP / |
        |  (Doubly-Linked List + Hash Map)  |    |   VWAP Executors   |
        +-----------------------------------+    +--------------------+
                          |
                          v
        +------------------------------------------------------------+
        |            Quantitative Analytics & Risk Subsystem         |
        +------------------------------------------------------------+
            |                          |                          |
            v                          v                          v
+-----------------------+  +-----------------------+  +-----------------------+
| Black-Scholes Greeks  |  | Monte Carlo 99% VaR   |  | Barra 5-Factor Equity |
|  & Volatility Surfaces|  | & CVaR Simulation     |  | Risk Attribution      |
+-----------------------+  +-----------------------+  +-----------------------+
```

---

## 🚀 Key Engineering Features

### 1. Level-2 / Level-3 Limit Order Book (`LOB`)
* **Price-Time Priority Allocation:** Constant time $\mathcal{O}(1)$ order insertion at the tail of price queues and $\mathcal{O}(1)$ cancellation via direct pointer dereferencing.
* **Full Depth-of-Market (DOM):** Real-time aggregation of bids and asks across 100+ price levels.
* **Deterministic Matching:** Immediate-or-Cancel (IOC), Fill-or-Kill (FOK), Post-Only, and Good-Till-Cancelled (GTC) order execution.

### 2. Analytical Derivatives Pricing & Greeks Engine
* **Black-Scholes Closed-Form Solvers:** Exact analytical pricing for European calls and puts.
* **First & Second Order Greeks:** Real-time computation of $\Delta$ (Delta), $\Gamma$ (Gamma), $\Theta$ (Theta), $\mathcal{V}$ (Vega), and $\rho$ (Rho).
* **Exotic Derivatives Modules:** Analytical and Crank-Nicolson PDE solvers for Barrier, Asian arithmetic average, and Lookback options.

### 3. Multi-Asset Monte Carlo Portfolio Risk
* **Cholesky Factorization:** Correlated asset returns generation across 580+ equity tickers and 350+ FX/Crypto pairs.
* **Parametric & Non-Parametric VaR:** Calculation of 95% and 99% Value at Risk (VaR), Expected Shortfall (CVaR), and maximum drawdown projections.

### 4. Enterprise FIX Protocol & Historical Datasets
* **FIX 4.4 Parser:** Low-allocation tag-value parsing for `NewOrderSingle (35=D)`, `ExecutionReport (35=8)`, and `OrderCancelRequest (35=F)`.
* **OHLCV Market Data:** Integrated historical bar series and Nelson-Siegel sovereign yield curve matrices.

---

## 📂 Repository Layout

```text
apexquant/
├── src/
│   ├── engine/
│   │   ├── matching/          # Deterministic trade matching engine
│   │   └── orderbook/         # L2/L3 doubly-linked list order book
│   ├── quant/
│   │   ├── options/           # Black-Scholes & Exotic options solvers
│   │   ├── portfolio/         # Factor risk models & Barra equity matrices
│   │   └── risk/              # Monte Carlo VaR & CVaR risk analytics
│   ├── indicators/            # 120+ Technical analysis indicators
│   ├── strategies/            # Statistical arbitrage & market making models
│   └── data/                  # Multi-year historical bars, yield curves & option chains
├── server/
│   ├── gateway/               # Real-time WebSocket / HTTP server
│   └── protocol/              # FIX 4.4 protocol parser
└── tests/
    ├── unit/                  # Unit test suites for all financial models
    └── runner.js              # Master test suite runner
```

---

## ⚙️ Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Quick Start
```bash
# Clone the repository
git clone https://github.com/rohith1246/ApexQuant.git
cd ApexQuant

# Install dependencies (zero external runtime dependencies required)
npm install

# Run all quantitative unit tests
npm test

# Start the Gateway Server
npm start
```
The Institutional Trading Gateway will initialize on `http://localhost:4000`.

---

## 🧪 Automated Testing
ApexQuant includes automated unit test suites validating mathematical accuracy:
```bash
node tests/runner.js
```
```text
================================================================
  ⚡ APEXQUANT - MASTER QUANTITATIVE TEST SUITES EXECUTION
================================================================
  * Running LimitOrderBook tests...           [PASS]
  * Running MatchingEngine tests...           [PASS]
  * Running BlackScholes options pricing...   [PASS]
  * Running MonteCarloVaR simulation...       [PASS]
  * Running TechnicalIndicators tests...      [PASS]
  * Running FIXParser protocol tests...       [PASS]
================================================================
  ✅ ALL INSTITUTIONAL QUANT TEST SUITES PASSED (100% SUCCESS)
================================================================
```

---

## 🔒 License & Intellectual Property
Proprietary & Confidential. All rights reserved by `rohith1246`. Unauthorized copying, reverse engineering, or redistribution is strictly prohibited.
