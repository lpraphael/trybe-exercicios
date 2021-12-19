let minhaPosicao = document.querySelector('elementoOndeVoceEsta');

const pai = minhaPosicao.parentElement;
pai.style.color = 'green';

const primeiroFilhodoFilho = minhaPosicao.firstElementChild;
primeiroFilhodoFilho.innerText = 'primeiro Filho Do Filho';

const primeiroFilho = pai.firstElementChild;

const SegundoFilho = minhaPosicao.previousElementSibling;

const texto = minhaPosicao.nextSibling;

const terceiroFilho = minhaPosicao.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

