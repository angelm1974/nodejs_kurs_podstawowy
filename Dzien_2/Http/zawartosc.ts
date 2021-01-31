let http_zawartosc=require('http');



http_zawartosc.get('http://example.org',(res)=>{
    res.on('data',(data)=>{
        console.log(data.toString());
    });
});