// Questão 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

function boasVindas(info) {
console.log('bem-vinda, ' + info.personagem)
}

// Questão 2

info['recorrente'] = 'Sim';
console.table(info)

// Questão 3

function todasAsChaves(info) {
  for( let key in info) {
    console.log(key)
  }
}

// Questão 4

function todasAsChaves(info) {
  for( let key in info) {
    console.log(info[key])
  }
}

// Questão 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

function imprimirObjeto (info, info2) {
  for (key in info){
    if (key === 'recorrente' && info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
      console.log('Ambos recorrentes')
    } else {
      console.log(info[key] + ' e ' + info2[key])
    }
  }
}

// Questão 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos:[
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ]
};

console.log('O livro favorito da ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'")

// Questão 7
function novoLivroFavorito (leitor){
  leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }
  )
}

novoLivroFavorito(leitor)

// Questão 8

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');