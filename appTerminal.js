const argv = require('yargs')
    .command('listar', 'imprime en la consola la tabla de multiplicar, {}')
    .argv;

let argv2 = process.argv;
//let parametro = argv[2];
//console.log('parametro es : ' + parametro);


//let { multiplicar } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar');
/*
multiplicar(parametro)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    */

console.log('hola' + argv);
console.log(argv2);