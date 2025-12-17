// Simple Node.js static server with SPA fallback for BuddyJS
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const publicDir = path.join(root, 'public');
const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.scss': 'text/x-scss',
};

const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'geolocation=()'
};

const serveFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, securityHeaders);
      res.end('404 Not Found');
    } else {
      const ext = path.extname(filePath);
      res.writeHead(200, { ...securityHeaders, 'Content-Type': mime[ext] || 'text/plain' });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(root, reqPath);
  if (!fs.existsSync(filePath)) filePath = path.join(root, 'index.html');
  serveFile(filePath, res);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`BuddyJS server running at http://localhost:${PORT}`);
});
