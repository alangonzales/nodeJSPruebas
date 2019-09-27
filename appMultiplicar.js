let { multiplicar } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar');

multiplicar('alan')
    .then(res => console.log(res))
    .catch(err => console.log(err));