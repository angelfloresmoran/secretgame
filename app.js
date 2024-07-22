let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

function asignarTextoAelementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;//Generamos un número pseudo-aleatorio
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    //Si ya sorteamos todos los números
    if (listaNumerosGenerados.length === numeroMaximo) {
        asignarTextoAelementos('p','Ya se sortearon todos los números posibles');
    }
    else {
        //Si el número generado esta en la lista, se realizará lo siguiente:
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }//Si no 
        else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoAelementos('h1', "Juego del número Secreto");
    asignarTextoAelementos('p', `Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto===numeroDeUsuario);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoAelementos('p', `Acertaste al número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);//string template + operador ternario en un parámetro
        document.getElementById('reiniciar').removeAttribute('Disabled');
    }
    else {
        //Acciones a ejecutar en caso de que el usuario no acierte
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoAelementos('p', 'El número secreto es menor');
        }
        else {
            asignarTextoAelementos('p', 'El número secreto es mayor');
        }
        limpiarCaja();
        intentos++;
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //Limpiar la caja de texto
    limpiarCaja();
    //Indicar en el mensaje "los intervalos del juego"
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón "nuevo juego" deshabilitado
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();
