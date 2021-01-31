let http3 = require('http');
let fs1 = require('fs');

let server3 = http3.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        let Zmienna = 'Moja strona'
        let html = fs1.readFileSync('./index.html', 'utf8');
        html = html.replace('{Zmienna}', Zmienna);
        res.end(html);
    } else if (req.url === '/ciasta') {
        res.writeHead(200);
        res.end('Strona z ciastami');
    } else if (req.url === '/torty') {
        res.writeHead(200);
        res.end('Strona z tortami');

    } else {
        res.writeHead(404);
        res.end('Brak strony internetowej');
    }

    console.log('Serwer nasłuchuje na: http://localhost:3000');
})

server3.listen(3000);