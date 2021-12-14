const a = 5;
const b = 10;

// questão 1

function adicao (a, b) {
  let resultado = 0;
  resultado = a + b;
  return resultado;
}

function subtracao (a, b) {
  let resultado = 0;
  resultado = a - b;
  return resultado;
}

function multiplicacao (a, b) {
  let resultado = 0;
  resultado = a * b;
  return resultado;
}

function divisao (a, b) {
  let resultado = 0;
  resultado = a / b;
  return resultado;
}

function modulo (a, b) {
  let resultado = 0;
  resultado = a % b;
  return resultado;
}

// questão 2

function maiorNumero (a, b) {
  if (a < b) {
    return b
  }
  return a  
}

// questão 3

const x = 110;
const y = 110;
const z = 110;

function maiorDeTres (x, y, z) {
  let resultado;
  if (x < z && y < z) {
    resultado = z;
  } else if ( x > y && x > z) {
    resultado = x;
  } else if ( y > x && y > z) {
    resultado = y;
  } else {
    
    resultado = 'não insira numeros iguais';
  }
  return resultado;
}

// questão 4

const numero = 0;

function positivoNegativo (numero) {
  let resultado;
  if (numero % 2 === 0 && numero !== 0){
    resultado = 'positive'
  } else if ( numero % 2 !== 0) {
    resultado = 'negative';
  } else if (numero === 0){
    resultado = 'zero';
  }
  return resultado;
}

// questão 5

const angulo1 = 30;
const angulo2 = 60;
const angulo3 = 90;

function triangulo (angulo1, angulo2, angulo3){
  let resultado;
  if (Math.sign(angulo1) === -1 || Math.sign(angulo2) === -1 || Math.sign(angulo3) === -1) {
    resultado = 'erro'
    return resultado;
  }
  if (angulo1 + angulo2 + angulo3 === 180) {
    resultado = true;
  } else if (angulo1 + angulo2 + angulo3 !== 180){
    resultado = false;
  }
  return resultado;
}

// questão 6



// questão 7

// questão 8

// questão 9

// questão 10 

// questão 11