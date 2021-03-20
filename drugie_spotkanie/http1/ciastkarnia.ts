var http1 =require('http');
http1.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`<h1 style="color:blue;">Strona startowa!</h1>`)
    } else if (req.url =='/ciasta'){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`<h1 style="color:blue;">Strona z ciastami!</h1>`)
    } else if (req.url =='/torty'){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`<h1 style="color:blue;">Strona z tortami!</h1>`)
    } else if (req.url =='/zamowienia'){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`<h1 style="color:blue;">Strona z zamowieniami!</h1>`)
    } else if (req.url =='/onas'){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`<h1 style="color:blue;">Strona o nas!</h1>`)
    } else {
        res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`<h1 style="color:red;">Nie ma takiej strony!</h1>`)
    } 
}).listen(3000);
console.log('Serwer pracuje...');