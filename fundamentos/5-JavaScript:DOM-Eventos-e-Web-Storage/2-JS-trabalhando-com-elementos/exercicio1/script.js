let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiro Filho Do Filho';

const primeiroFilho = pai.firstElementChild;

const SegundoFilho = elementoOndeVoceEsta.previousElementSibling;

const texto = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// criando elemento irmao da elementoOndeVoceEsta
let irmaoelementoOndeVoceEsta = document.createElement('section');
pai.appendChild(irmaoelementoOndeVoceEsta);

// criando um filho para elementoOndeVoceEsta
let filhoelementoOndeVoceEsta = document.createElement('p');
elementoOndeVoceEsta.appendChild(filhoelementoOndeVoceEsta);
filhoelementoOndeVoceEsta.innerText = 'enfim to aprendendo';
// criando um filho do primeiroFilhoDoFilho
let primeiroFilhoDoFilhoDoFilho = document.createElement('h2');
primeiroFilhoDoFilho.appendChild( primeiroFilhoDoFilhoDoFilho);
primeiroFilhoDoFilhoDoFilho.innerText = 'xablau';
// acessando terceiro filho a partir do primeiroFilhoDoFilhoDoFilho
terceiroFilho = primeiroFilhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho)