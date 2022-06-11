const operations = require('./operacoes');
const readLine = require('readline-sync')
console.log('calculadora simples');
const val1 = readLine.questionInt('Digite um número:')
const oper = readLine.question('Digite a operação: (+, -, *, /) ')
const val2 = readLine.questionInt('Digite outro número:')

switch (oper) {
  case '+':
    operations.sum(val1, val2)
    break;
  case '-':
    operations.sub(val1, val2)
    break;
  case '*':
    operations.mul(val1, val2)
    break;
  case '/':
    operations.div(val1, val2)
    break;    
  default:
    console.log('Opa! A operação é desconhecida ou não foi implementada')
  }
