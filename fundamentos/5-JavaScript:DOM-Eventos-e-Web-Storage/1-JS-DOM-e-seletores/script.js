let cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'green';

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i < emergencyTasks.length; i += 1){
  emergencyTasks[i].style.backgroundColor = 'purple'  ;
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for(let i = 0; i < noEmergencyTasks.length; i += 1){
  noEmergencyTasks[i].style.backgroundColor = 'black'  ;
}

let fundoEmergencyTasks = document.getElementsByClassName('emergency-tasks');
fundoEmergencyTasks[0].style.backgroundColor = 'bisque'

let fundoNoEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
fundoNoEmergencyTasks[0].style.backgroundColor = '#eead2d';

let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = '#036b52';