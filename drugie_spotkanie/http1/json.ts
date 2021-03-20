var http2 =require('http');
http2.createServer(function(req,res){
    var dane ={
        id: 3,
        nazwisko:'Kowalski',
        imie: 'Jan',
        inne: 'ąęśżć'
    }
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(dane));
}).listen(3000);
console.log('Serwer pracuje...');