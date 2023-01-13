const titulo = document.getElementById('heading')
//const botao = document.getElementsByClassName('btn')
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
        turnOn.style.backgroundColor = '#000';
        turnOff.style.backgroundColor = '#000';
        turnOn.style.color = '#ffff';
        turnOff.style.color = '#ffff';
    }
}

function lampOff (){
    if (!verifyLamp()){
        audio.play();
        lamp.src = '/img/desligado.png';
        body.style.backgroundColor = 'rgb(41, 41, 41)';
        titulo.style.color = '#ffff'
        turnOn.style.backgroundColor = '#ffff';
        turnOff.style.backgroundColor = '#ffff';
        turnOn.style.color = '#000';
        turnOff.style.color = '#000';
    }
}

function lampBreaking (){
    if (!verifyLamp()){
        lamp.src = '/img/quebrada.png';
        audioB.play();
        titulo.style.color = '#ffff'
        turnOn.style.backgroundColor = '#ffff';
        turnOff.style.backgroundColor = '#ffff';
        turnOn.style.color = '#000';
        turnOff.style.color = '#000';
    }
    body.style.backgroundColor = 'rgb(41, 41, 41)';
}

function verifyLamp (){
    return lamp.src.indexOf ('quebrada') > -1
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBreaking);
