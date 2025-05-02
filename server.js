const http = require('http');
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(`Hello Digistar 2024\nHTTP Version: ${req.httpVersion}\n`);
});
server.listen(3000, () => {
console.log('Your server is running at http://127.0.0.1:3000/');
});