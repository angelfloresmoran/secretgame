//Ejercicios del módulo funciones
helloWorld();
let saludoNombre = saludoUsuario();
let numeroAlDoble = numeroDoble();
let numeroMayor = determinarNumeroMayor();
let multiplicador = multiplicarNumeroPorSiMismo();

//FUNCIONES 
function helloWorld(){
    return console.log("¡Hola, mundo!");
}

function saludoUsuario(nombre){
    nombre = prompt("Ingrese su nombre de favor: ");
    return console.log(`Hola ${nombre}`);
}

function numeroDoble(numero){
    numero = parseInt(prompt("Ingrese un dígito de favor"));
    return console.log(`Numero doblado es igual a ${numero * 2}`);
}

function promediarDigitos(numero1, numero2, numero3){
    let promedio=(numero1+numero2+numero3)/3;
    return console.log(promedio);
}
promediarDigitos(9,9,10);

function determinarNumeroMayor(numero1, numero2){
    let numeroMayor;
    let mensaje = "El número mayor de los dígitos ingresados es el";
    numero1=parseInt(prompt("Ingresa el dígito 1"));
    numero2=parseInt(prompt("Ingresa el segundo dígito"));
    if(numero1>numero2){
        numeroMayor=numero1;
    }else if(numero1<numero2){
        numeroMayor=numero2;
    }else if(numero1===numero2){
        mensaje="Los"
        numeroMayor= "números ingresados son iguales";
    }else{numeroMayor="Error, revisar"}

    return console.log(`${mensaje} ${numeroMayor}`);
}

function multiplicarNumeroPorSiMismo(numero){
    numero=parseInt(prompt("Ingresar digito a multiplicar por si mismo"));
    return console.log(numero*numero);
}



