var http = require('http');
http.createServer(function (req, res) {
    var dane = {
        id: 1,
        nazwisko: 'Kowalski',
        imie: 'Jan'
    }
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(dane));
}).listen(3000);
console.log('Serwer pracuje...');
