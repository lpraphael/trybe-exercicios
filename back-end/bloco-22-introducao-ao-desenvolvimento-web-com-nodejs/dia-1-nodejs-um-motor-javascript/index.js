const readline = require('readline-sync')

function main() {
console.log('1 - calculadora de imc');
console.log('2 - sorteio!');
console.log('3 - calculadora de velocidade média');
console.log('4 - calculadora de fatorial');
console.log('5 - calculadora de sequência fibonacci');
const option = readline.questionInt('Digite o número da ação a ser executada: ')
switch(option) {
  case 1:
    const imc = require('./imc')
    console.log('ue')
    imc.main()
    break;
  case 2:
    const sorteio = require('./sorteio')
    sorteio.main()
    break;
  case 3:
    const velocidade = require('./velocidade')
    velocidade.main()
    break;
    case 4:
    const fatorial = require('./fatorial')
    fatorial.main()
    break;
    case 5:
    const fibonacci = require('./fibonacci')
    fibonacci.main()
    break;
  default:
    console.log('Opa! A operação é desconhecida ou não foi implementada')
  }
}

main()


