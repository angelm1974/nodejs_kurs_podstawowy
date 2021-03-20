var http = require('http');
http.createServer(function (req, res) {

    if (req.url === '/') {
        res.writeHeader(200 , {"Content-Type" : "text/html; charset=utf-8"});
        res.end('Index page');
    } else if (req.url === '/ciasta') {
        res.writeHead(200);
        res.end('Strona z ciastami');
    } else if (req.url === '/torty') {
        res.writeHead(200);
        res.end('Strona z tortami');
    } else {
        res.writeHead(404);
        res.end('Brak strony internetowej');
    }
}).listen(3000);
console.log('Serwer pracuje...');
