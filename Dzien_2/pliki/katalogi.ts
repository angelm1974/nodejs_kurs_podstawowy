let readline = require('readline');
let plik=require('fs');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Jak masz na imię? \n', function (answer) {
   
    plik.mkdir(answer, function(error){}); 
    let wynik=plik.readFileSync('./index.html','utf8');
    plik.writeFile('./' + answer +'/dane.txt',wynik,function(error){});
    
        rl.close();
   
});
