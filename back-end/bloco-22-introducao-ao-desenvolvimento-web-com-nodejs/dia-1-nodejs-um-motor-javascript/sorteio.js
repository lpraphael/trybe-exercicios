const readLine = require('readline-sync')

console.log('Sorteio!')

const sorteio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function main () {
  const number = readLine.questionInt('Digite um número inteiro entre 0 e 10: ')
  const sorte = sorteio(0, 10)
  if(number === sorte) {
    console.log('Parabéns, número correto!')
  }
  if(number !== sorte) {
   console.log(`Opa, não foi dessa vez. O número era [${sorte}]`)
  }
  console.log('.')
  const newgame = readLine.question('Quer jogar novamente?(s/n) ')
  if( newgame === 's') {
    main()
  }
  if( newgame === 'n') {
    console.log('Até a próxima!')
    return
  }
}

module.exports = {
  sorteio,
  main
}