// Questão 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let letras = ['a', 'b', 'c', 'd', 'e'];

function percorrendoArray (letras) {
  for(let letra of letras){
    console.log(letra)
  }
}

// Questão 2

function somandoArray(numbers) {
  let resultado =  0;
  for (let contador = 0; contador < numbers.length; contador += 1) {
    resultado = resultado + numbers[contador]
  }
  return resultado
}

// Questão 3 e 4

function mediaAritmetica(numbers) {
  let resultado =  0;
  let somaNumeros = 0;
  for (let contador = 0; contador < numbers.length; contador += 1) {
    somaNumeros = somaNumeros + numbers[contador]
  }
  resultado = somaNumeros / numbers.length;
  if (resultado > 20) {
    console.log('valor maior que 20')
    return resultado
  }
  console.log('valor menor ou igual a 20')
  return resultado
}

// Questão 5

function maiorNumero(numbers){
  let maiorNum = numbers[0];
  for(let index = 1; index < numbers.length; index += 1) {
    if (maiorNum < numbers[index]){
      maiorNum = numbers[index]
    }
  }
  return maiorNum
}

// Questão 6

function seraImpar(numbers) {
  let numImpares = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0){
      numImpares += 1;
    }
  }
  if (numImpares === 0){
     return 'nenhum valor ímpar encontrado';
  }
  return numImpares;
}

// Questão 7

function menorNumero(numbers){
  let menorNum = numbers[0];
  for(let index = 1; index < numbers.length; index += 1) {
    if (menorNum > numbers[index]){
      menorNum = numbers[index]
    }
  }
  return menorNum
}

// Questão 8

function contandoAte25() {
  let contador = [];
  for(i = 0; i <= 25; i +=1){
    contador.push(i)
  }
  console.log(contador);
  return contador;
}
 
// Questão 9

function dividindoUmArray() {
  let arrayDeNumeros = contandoAte25();
  let numerosdivididos = []
  for(let posicao of arrayDeNumeros){
    numerosdivididos.push(posicao / 2)
  }
  return numerosdivididos
}


