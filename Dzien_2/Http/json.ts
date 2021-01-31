let http4 = require('http');

let server4 = http4.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    var dane = [{
        id: 1,
        nazwisko: 'Kowalski',
        imie: 'Jan'
    },
    {
        id: 2,
        nazwisko: 'Nowak',
        imie: 'Tomasz'
    }
    ]

    res.end(JSON.stringify(dane));
    console.log('Serwer nasłuchuje na: http://localhost:3000');
})

server4.listen(3000);