function pokaz(callback){
    console.log('Ropoczyna sie działanie funkcji');
    callback();
}


pokaz(function(){
console.log('Nastąpiło wywołanie CallBack!!')
});