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
const nomePeca = 'queen';

function movimentoXadrez (nomePeca) {
  let peca = nomePeca.toLowerCase();
  let movimento;
  let resultado;

  switch (peca) {
    case 'bishop':
      movimento = 'diagonais';
      break;
    case 'queen':
      movimento = 'Colunas, fileiras e diagonais';
      break;
    case 'king':
      movimento = 'Colunas, fileiras e diagonais, apenas uma casa por lance';
      break;
    case 'rook':
      movimento = 'Colunas e fileiras';
      break;
    case 'knight':
      movimento = 'movimenta-se em L';
      break;
    case 'pawn':
      movimento = 'movimenta uma casa para frente e captura peças na diagonal';
      break;
      default:
        movimento = 'Desculpe, ocorreu um erro. Escolha uma peça de xadrez válida.'
  }
  resultado =  (peca + ' -> ' + movimento);
  return resultado;
}

// questão 7
const porcentagem = -15

function nota (porcentagem) {
let resultado;
if (porcentagem >= 90 && porcentagem <= 100) {
  resultado = 'A';
} else if (porcentagem >= 80 && porcentagem <= 89) {
  resultado = 'B';
} else if (porcentagem >= 70 && porcentagem <= 79) {
  resultado = 'C';
} else if (porcentagem >= 60 && porcentagem <= 69) {
  resultado = 'D';
} else if (porcentagem >= 50 && porcentagem <= 99) {
  resultado = 'E';
} else if (porcentagem <= 50 && porcentagem >= 0) {
  resultado = 'F';
} else {
  resultado = 'Nota inválida. Digite nota etre 0 e 100';
};

console.log(resultado);
return resultado;

}

nota(porcentagem)

// questão 8
const num1 = 2;
const num2 = 4;
const num3 = 6;

function par (num1, num2, num3){
  if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 %2 !== 0) {
    return false;
  }
  return true 
}

// questão 9

function impar (num1, num2, num3){
  if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 %2 !== 0) {
    return true;
  }
  return false; 
}

// questão 10 
const custo = 1000;
const valorDeVenda = 2000;

function rentabilidade (custo, valorDeVenda) {
  if (custo === 0 || valorDeVenda === 0) {
    return 'Operação inválida. Um ou mais valores recebidos é igual a zero';
  }  
  const impostoSobreProduto = custo * 0.2;
  let custoTotal = impostoSobreProduto + custo;
  let lucro =  valorDeVenda - custoTotal;
  const milProdutos = lucro * 1000;
  return `o lucro obtido após vender mil unidades é R$${milProdutos}`;
}

// questão 11

const salarioBruto = 5190;

function calculoINSS (salarioBruto) {
  let valorINSS;
  if (salarioBruto <= 1556.94) {
    valorINSS = (salarioBruto * 0.08);
  } else if(salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    valorINSS = (salarioBruto * 0.09);
  } else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    valorINSS = (salarioBruto * 0.11);
  } else if(salarioBruto > 5189.82) {
    valorINSS = (570.88);
  }
  console.log('valor inss', valorINSS.toFixed(2))
return valorINSS.toFixed(2);
}

function calculoIR (salarioBruto, INSS) {
  let valorIR;
  salarioDeduzidoINSS = salarioBruto - INSS;
  if (salarioDeduzidoINSS <= 1903.98) {
    valorIR = 0;
  } else if (salarioDeduzidoINSS > 1903.98 && salarioDeduzidoINSS <= 2826.65) {
    valorIR = ((salarioDeduzidoINSS * 0.075) - 142.80);
  } else if (salarioDeduzidoINSS > 2826.65 && salarioDeduzidoINSS <= 3751.05) {
    valorIR = ((salarioDeduzidoINSS * 0.15) - 354.80);
  } else if (salarioDeduzidoINSS > 3751.05 && salarioDeduzidoINSS <= 4664.68) {
    valorIR = ((salarioDeduzidoINSS * 0.225) - 636.13);
  } else if (salarioDeduzidoINSS > 4664.68) {
    valorIR = ((salarioDeduzidoINSS * 0.27) - 869.36);
  }
  console.log('valor ir', valorIR.toFixed(2))
  return valorIR.toFixed(2)
}

function salarioLiquido (salarioBruto) {
  const INSS = calculoINSS(salarioBruto);
  const IR = calculoIR(salarioBruto, INSS);
  const resultado = salarioBruto - INSS - IR;
  console.log(resultado.toFixed(2));
  return resultado.toFixed(2);
}

salarioLiquido(salarioBruto)