const turnOn = document.getElementById('turn-on');
const turnOff = document.getElementById('turn-off');
const lamp = document.getElementById('lamp');

function lampOn (){
    lamp.src = '/img/ligada.jpg';
}

function lampOff (){
    lamp.src = '/img/desligado.png';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);