const httpS=require('http');
const server=httpS.createServer((request,response)=>{
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end('<h1 style="color:blue;">Działa</h1>')
 });
 server.listen(3000);
 console.log('Server działa i nasłuchuje na porcie 3000');