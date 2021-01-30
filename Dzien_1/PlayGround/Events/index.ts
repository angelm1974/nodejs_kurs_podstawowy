let zdarzenie=require('events');

let emiter =new zdarzenie.EventEmitter();

emiter.on('rejestracjaUzytkownika',powitanie);
emiter.on('abc',kasowanieKonta);
function powitanie(){
    console.log('Cześć nowy!!!');
}

function kasowanieKonta(){
    console.log('Zamknięcie konta!!!');
}
emiter.once('kasowanie',kasowanieKonta)

emiter.emit('rejestracjaUzytkownika');
emiter.emit('kasowanie');
emiter.emit('kasowanie');
emiter.emit('abc');