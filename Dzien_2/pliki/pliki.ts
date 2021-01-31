let fis=require('fs');
let wynik=fis.readFileSync('./index.html','utf8');
fis.writeFile('./dane.txt',wynik,{  flag: "a"},function(error){});
fis.unlink('./dane.txt',function(error){});

console.log(wynik);
fis.mkdir('katalog', function(error){});   
//1. Użytkownik podaje swoje imię
//System tworzy katalog
//W katalogu jest tworzony plik z zawartością pliku index.html
