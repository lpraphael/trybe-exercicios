const imc = (weight , height) =>  {
  result = (weight / (height ^ 2)).toFixed(2)
  console.log(`IMC = ${result}`)
  return result
}
const imcResult = (result) => {
  if(result < 18.5) {
    console.log('abaixo do peso (magreza)')
  }
  if(result >= 18.5 && result <= 24.9) {
    console.log('Peso normal')
  }
  if(result >= 25 && result <= 29.9) {
    console.log('Acima do peso')
  }
  if(result >= 30 && result <= 34.9) {
    console.log('Obesidade Grau I')
  }
  if(result >= 35 && result <= 39.9) {
    console.log('Obesidade Grau II')
  }
  if(result >= 40) {
    console.log('Obesidade Grau III ou Mórbida')
  }
}

module.exports = {
  imc,
  imcResult
}