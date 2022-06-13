const readLine = require ('readline-sync')

const fatorial = (n) => {
  let result = n;
  if(result === 1) {
    return result
  }
  for(let i = n - 1; i > 0; i -= 1) {
    result *= i
  }
  return result
}

const inputNumber = () => {
  const number = readLine.questionInt('Digite um numero inteiro positivo > 0 (zero): ')
  return number
}

function main() {
  let number = inputNumber();
  
  if(number <= 0){
    // number = inputNumber();
    console.log('digite um numero maior que zero! seu animal')
    main();
  } 
  console.log(fatorial(number))
}

module.exports = {
  fatorial,
  main
}