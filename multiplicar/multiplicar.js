const fs = require('fs');

let pinta = '';


let multiplicar = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un número');
            return;
        }

        for (let i = 1; i <= 10; i++) {
            pinta += base * i + `\n`;
        }
        fs.writeFile(`./tabla-${base}.txt`, pinta, (err) => {
            if (err) reject(err);
            else resolve('todo correcto');
        });
    });


}

/*
multiplicar(3)
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/
module.exports = {
    multiplicar
}