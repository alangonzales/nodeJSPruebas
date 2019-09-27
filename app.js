//requireds
//const fs = require('fs'); nativo de node
//const fs = require('express'); es fuera de node
//const fs = require('./fs'); son archivos de nuestro proyecto

const fs = require('fs');



let base = 2;

for (let i = 1; i <= 10; i++) {
    console.log(base * i);
}

fs.writeFile('D:/nodeJs/tabla-2.txt', 'hola mundo', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});