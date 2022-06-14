const readLine = require('readline-sync')

function mathOperation(num1, num2, num3) {

const promise = new Promise((resolve, reject) => {
if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
reject(new Error('Informe apenas números'))
}
const result = (num1 + num2) * num3;
if(result < 50) {
reject(new Error('Valor muito baixo'))
}
resolve(result)
});
return promise
}

// mathOperation(4, 5, 6)
// .then(result => console.log(`sucesso: ${result}`))
// .catch(err => console.log(`erro: ${err.message}`));

module.exports = {
  mathOperation
}

