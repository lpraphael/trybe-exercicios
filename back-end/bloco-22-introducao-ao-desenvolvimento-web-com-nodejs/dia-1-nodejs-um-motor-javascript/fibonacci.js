const readLine = require('readline-sync')

const fibonacci = (n) => {
  let sequence = [1];
  let v1 = 0
  let v2 = 1
  for(let i = 0; i < n - 1; i += 1) {
    const valor = v1 + v2
    sequence.push(valor)
    v1 = v2
    v2 = valor
  }
  console.log(sequence);
}



function main() {
  const number = readLine.questionInt('digite um numero inteiro, positivo maior que 0 (zero): ')
  if(number <= 0) {
    console.log('Número inválido. Digite um numero que atenda a condição!')
    main();
  }

  fibonacci(number)

}

module.exports = {
  fibonacci,
  main
}