const http = require('http');
const coolImages = require('cool-images');

const hostname = '0.0.0.0';
const port = 6110;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(coolImages.one(600, 800));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
