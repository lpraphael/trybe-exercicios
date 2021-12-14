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

// questão 3
const numero = 10;

function positivoNegativo ()

