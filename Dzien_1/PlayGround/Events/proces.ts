//console.log(process);

//console.log(process.pid);
//process.abort();


//console.log(process.argv);

// process.stdout.write('Dzień dobry \n');


// process.stdin.on('data',function(data){
//     console.log(data);
// });

let interval=
setInterval(function(){
    console.log('OK')},1000
);

setTimeout(() => {
    clearInterval(interval);
},10000);
