let zdarzenie=require('events');
let wynik=require('process');

let emiter =new zdarzenie.EventEmitter();

emiter.on('przekroczonaPamiec',powitanie);

function powitanie(){
    console.log('Skończyła się pamięć!!!');
    clearInterval(interval2);
}


let interval2 = setInterval(function(){
    console.log(wynik.memoryUsage().rss);
    if(wynik.memoryUsage().rss>19000000){

      emiter.emit('przekroczonaPamiec');  
    }
    },1000)