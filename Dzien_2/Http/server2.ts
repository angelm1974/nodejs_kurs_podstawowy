let http2 = require('http');
let fs = require('fs');

let server2 = http2.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html' });
    let Zmienna = 'Moja strona'
    let html = fs.readFileSync('./index.html', 'utf8');
    html = html.replace('{Zmienna}', Zmienna);
    response.end(html);
    console.log('Serwer nasłuchuje na: http://localhost:3000');
})

server2.listen(3000);