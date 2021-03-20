const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.port || 3000;
http.createServer((req, res) =>
{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    switch (req.url)
    {
        case '/':
            fs.readFile(path.join(__dirname, "html/index.html"), (err, page) =>
            {
                if (err) res.end(`<h1> Nie udało się pobrać pliku</h1>`);
                else res.end(page);   
            })
            break;
        case '/ciasta':
            const ciasto = req.params;
            fs.readFile(path.join(__dirname, "html/ciasta.html"), (err, page) =>
            {
                let page2=page.toString();
                page2=page2.replace('{ciasto}','karpatka');
                if (err) res.end(`<h1> Nie udało się pobrać pliku</h1>`);
                else res.end(page2);
            })
            break;
        case '/torty':
            fs.readFile(path.join(__dirname, "html/torty.html"), (err, page) =>
            {
                if (err) res.end(`<h1> Nie udało się pobrać pliku</h1>`);
                else res.end(page); 
            })
            break;
        default:
            fs.readFile(path.join(__dirname, "html/404.html"), (err, page) =>
            {
                if (err) res.end(`<h1> Nie udało się pobrać pliku</h1>`);
                else res.end(page); 
            })
            break;
    }
}).listen(port, '127.0.0.1', () =>
{
    console.log(`Nasz server nasłuchuje na porcie ${port}`);
})