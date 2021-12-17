// Questão 1
const numero = 10;

function fatorial(numero) {
  let resultado = 0;
  let i = numero - 1;
  for(let index = numero; index >= 0; index -= 1) {
    resultado = resultado + (index * i)
    i -= 1
  }
  return resultado
}

// Questão 2

let word = 'trybe';

function inverterPalavra(word) {
  let palavraAoContrario = [];
  for(i = word.length -1; i >= 0; i -= 1) {
    palavraAoContrario.push(word[i]);
  }
  let resultado = palavraAoContrario.join('')
  return resultado
}

// Questão 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

function maiorPalavra (array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if(array[i].length > maior.length){
      maior = array[i]
    }
}
return maior
}

function menorPalavra(array) {
  let menor = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if(array[i].length < menor.length){
      menor = array[i]
    }
}
return menor
}

// Questão 4