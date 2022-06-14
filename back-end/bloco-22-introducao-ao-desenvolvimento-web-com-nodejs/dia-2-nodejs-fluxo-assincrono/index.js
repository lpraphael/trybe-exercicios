const { mathOperation } = require('./mathOperation');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

mathOperation(num1, num2, num3)
.then(result => console.log(`sucesso: ${result}`))
.catch(err => console.log(`Erro: ${err.message}`))