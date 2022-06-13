const readLine = require('readline-sync')

const velMedia = (distance, time) => (distance / time).toFixed(1);

function main() {

  console.log('caluladora de velocidade média')

  const distance = readLine.questionInt('Qual a distância percorrida (metros): ')
  const time = readLine.questionInt('quanto tempo durou (segundos): ')

  const result = velMedia(distance, time)
  console.log(`sua velocidade média é de ${result} km/h`)

}

module.exports = {
  velMedia,
  main
}