import http from 'http';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hello, World!</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin: 0; display: grid; place-items: center; min-height: 100vh; background: #f6f7f9; color: #111; }
    .card { background: white; padding: 2rem 2.5rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    h1 { margin: 0 0 .5rem; font-size: 2rem; }
    p { margin: 0; color: #555; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World!</h1>
    <p>Your server is running on port ${port}.</p>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Hello, World! server listening on http://localhost:${port}`);
});
