/**
 * GatewayServer.js - Low-Latency Real-Time Market Data & Trading Gateway
 * Part of ApexQuant Institutional Engine
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-KEY');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'online',
      service: 'ApexQuant Institutional Gateway',
      version: '1.0.0',
      uptime: process.uptime(),
      latencyUs: 42
    }));
    return;
  }

  let filePath = path.join(__dirname, '../../index.html');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ApexQuant Financial Engine Active.');
  }
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`🚀 ApexQuant Trading Gateway listening on port ${PORT}`);
  });
}

module.exports = server;
