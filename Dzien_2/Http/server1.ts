let httpserv=require('http');

let server=httpserv.createServer((request,response)=>{
    response.writeHead(200,{'content-type': 'text/html'});
    response.end('<h1 style="color:red;">Witajcie studenci</h1>')
    console.log('Serwer nasłuchuje na: http://localhost:3000');  
})

server.listen(3000);