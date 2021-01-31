let http=require('http');

// http.get('http://example.org',function(res){

// });

http.get('http://example.org',(res)=>{
    console.log(res.statusCode);
});