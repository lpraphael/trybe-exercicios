const { imc, imcResult } = require('./imc')
const readLine = require('readline-sync')

console.log('calculadora de IMC (indice de massa corporal)')
console.log('-           -           -')
const weight = readLine.questionFloat('Digite seu peso: ')
const height = readLine.questionFloat('Digite sua altura: (em metros) ')
console.log('-           -           -')
result = imc(weight, height)
console.log('-           -           -')
imcResult(result)

