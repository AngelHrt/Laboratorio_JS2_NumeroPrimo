let btnVerificar = document.getElementById('verificar');

btnVerificar.addEventListener('click',verMensaje)

    

function verMensaje(){
let valor = document.getElementById('numero').value;
let resultado = document.getElementById('resultado');
let mensaje = '';


if (numero % 2 == 0 && numero % 3 == 0) {
mensaje = 'el numero ingresado no es primo';
} else {
mensaje = 'el numero ingresado es primo';
}

resultado.textContent = mensaje;
} 