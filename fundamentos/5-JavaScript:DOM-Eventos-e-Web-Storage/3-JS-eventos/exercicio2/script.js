function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasCalendario(dezDaysList){
  const dias = document.querySelector('#days');

  for(i = 0; i < dezDaysList.length; i += 1){
    let dia = dezDaysList[i];
    let diaCalendario = document.createElement('li');
    diaCalendario.className = 'day';
    
    if(dia === 24 || dia === 31) {
      diaCalendario.className = 'day holiday';
      diaCalendario.innerHTML = dia;
      dias.appendChild(diaCalendario);
    }else if(dia === 4 || dia === 11 || dia === 18) {
      diaCalendario.className = 'day friday';
      diaCalendario.innerHTML = dia;
      dias.appendChild(diaCalendario);
    } else if (dia === 25) {
      diaCalendario.className = 'day holiday friday';
      diaCalendario.innerHTML = dia;
      dias.appendChild(diaCalendario);
    } else {
      diaCalendario.innerHTML = dia;
      diaCalendario.className = 'day';
      dias.appendChild(diaCalendario);
    }
  };
};

diasCalendario(dezDaysList)

const feriado = 'Feriados'

function botaoFeriado(feriado){
  const botaoContainer = document.querySelector('.buttons-container');
  const feriados = document.createElement('button');
  botaoContainer.appendChild(feriados);
  feriados.id = 'btn-holiday';
  feriados.innerHTML = feriado;
}

botaoFeriado(feriado)

function mostrarFeriados(){
  let btnFeriados = document.querySelector('#btn-holiday');
  let feriado = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = 'white';
  
  btnFeriados.addEventListener('click', function() {
    for (let i = 0; i < feriado.length; i += 1) {
      if (feriado[i].style.backgroundColor === novaCor) {
        feriado[i].style.backgroundColor = backgroundColor;
      } else {
        feriado[i].style.backgroundColor = novaCor;
      }
    }
  });
}

mostrarFeriados();

const sexta = 'Sexta-Feira'

function botaoSextou(sexta) {
  const botaoContainer = document.querySelector('.buttons-container');
  const sextaFeiras = document.createElement('button');
  sextaFeiras.id = 'btn-friday';
  sextaFeiras.innerHTML = sexta;
  botaoContainer.appendChild(sextaFeiras);
};

botaoSextou(sexta)

function mostrarSextas(){
  const btnsextou = document.querySelector('#btn-friday');
  
  let sextasFeiras = document.querySelectorAll ('.friday');
  const sextou = 'SEXTOU! lol'
  
  btnsextou.addEventListener('click', function (){
    for (i = 0; i < sextasFeiras.length; i += 1){
      let dataSextas = [4, 11, 18, 25];
      if (sextasFeiras[i].innerHTML !== sextou) {
        sextasFeiras[i].innerHTML = sextou;
      } else {
        sextasFeiras[i].innerHTML = dataSextas[i];
      }
    }
  })
}

mostrarSextas();
