const readLine = require('readline-sync')

const imc = (weight , height) =>  {
  result = (weight / (height ^ 2)).toFixed(2)
  console.log(`IMC = ${result}`)
  return result
}

const imcResult = (result) => {
  if(result < 18.5) {
    return 'abaixo do peso (magreza)'
  }
  if(result >= 18.5 && result <= 24.9) {
    return 'Peso normal'
  }
  if(result >= 25 && result <= 29.9) {
    return 'Acima do peso'
  }
  if(result >= 30 && result <= 34.9) {
    return 'Obesidade Grau I'
  }
  if(result >= 35 && result <= 39.9) {
    return 'Obesidade Grau II'
  }
  if(result >= 40) {
    return 'Obesidade Grau III ou Mórbida'
  }
}

function main () {
  console.log('calculadora de IMC (indice de massa corporal)')
  console.log('-           -           -')
  const weight = readLine.questionFloat('Digite seu peso: ')
  const height = readLine.questionFloat('Digite sua altura: (em metros) ')
  console.log('-           -           -')
  result = imc(weight, height)
  console.log('-           -           -')
  const situacao = imcResult(result)
  console.log(`Situação: ${situacao} `)  
}

module.exports = {
  imc,
  imcResult,
  main
}