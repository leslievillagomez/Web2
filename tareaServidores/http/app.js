//http con el texto plano

const http = require('http');
const port = 3007;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Este es el texto plano de HTTP;)");
});

server.listen(port, () => {
    console.log(`Server: http://127.0.0.1:${port}`);
});
