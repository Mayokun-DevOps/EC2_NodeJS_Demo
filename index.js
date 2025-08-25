const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hey Guys, Welcome to Node_JS App deployed with Docker on AWS EC2!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});