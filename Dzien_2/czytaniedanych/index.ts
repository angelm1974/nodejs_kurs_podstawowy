let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Jak masz na imię? \n', function (answer) {
    rl.setPrompt('Cześć ' + answer + ' czy chcesz płacić kartą?');
    rl.prompt();
    rl.on('line', function (karta) {
        console.log(karta);
        rl.close();
    });
});

