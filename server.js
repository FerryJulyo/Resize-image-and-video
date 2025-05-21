const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to add required headers for cross-origin isolation
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  // Optional Content Security Policy to avoid issues
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; worker-src 'self' blob:;"
  );
  next();
});

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
  console.log('Make sure to open this URL in your browser to enable video compression.');
});

