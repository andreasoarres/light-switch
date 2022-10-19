const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')


function lampOn(){
    lamp.src ='./img/acesa.png';
}

function lampOff(){
    lamp.src = './img/apagada.png'
}

function lampBrokem(){
    lamp.src = './img/quebrada.png'
}




turnOn.addEventListener ('click', lampOn );
turnOff.addEventListener('click', lampOff );
//lamp.addEventListener('mouseover', lampOn);
//lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBrokem)