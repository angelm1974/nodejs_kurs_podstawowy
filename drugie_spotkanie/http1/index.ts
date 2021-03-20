var http = require('https');

http.get('https://code-one.pl',(res)=>{
    res.on('data',(data)=>{
        console.log(data.toString());
    })
});
