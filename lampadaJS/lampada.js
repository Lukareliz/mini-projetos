const titulo = document.getElementById('heading')
const turnOn = document.getElementById('turn-on');
const turnOff = document.getElementById('turn-off');
const lamp = document.getElementById('lamp');
let body = document.getElementById('body');
const audio = new Audio('/fx/click.mp3')
const audioB = new Audio('/fx/breaking.mp3')

function lampOn (){
    if (!verifyLamp()){
        audio.play();
        lamp.src = '/img/ligada.jpg';
        body.style.backgroundColor = '#ffff';
        titulo.style.color = '#000';
    }
}

function lampOff (){
    if (!verifyLamp()){
        audio.play();
        lamp.src = '/img/desligado.png';
        body.style.backgroundColor = 'rgb(41, 41, 41)';
        titulo.style.color = '#ffff'
    }
}

function lampBreaking (){
    if (!verifyLamp()){
        lamp.src = '/img/quebrada.png';
        audioB.play();
        titulo.style.color = '#ffff'
    }
    body.style.backgroundColor = 'rgb(41, 41, 41)';
}

function verifyLamp (){
    return lamp.src.indexOf ('quebrada') > -1
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBreaking);
