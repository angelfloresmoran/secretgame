//Ejecicios del módulo 3
let seleccionDelUsuario = parseInt(prompt("Selecciona un número, con base a la actividad de que deseas realizar. \n (1)Calcular IMC \n (2)Calcular Factorial \n (3)Conversion dolar a reales \n(4)Calcular valores de rectangulo. \n(5)Calcular valores Área Circular. \n(6)Generar tabla Multiplicar."));
//variables para las distintas funciones
let area=0;
let perimetro=0;
let diametro=0;
let resultado;
const pi=3.1416;

function calcularIMC(peso, altura){
    peso = parseFloat(prompt("Ingresa tu peso en kilogramos"));
    altura = parseFloat(prompt("Ingresa tu altura en metros"));
    let IMC = peso/(altura*altura);
    return alert(`Tu indice de masa corporal es ${IMC.toFixed(4)}`);
}

function calularFactorial(numeroFacto){
    numeroFacto=parseInt(prompt("Ingrese el número a calcular"));
    let resultado=1;
    if (numeroFacto < 0) {
        throw new Error("El factorial no está definido para números negativos.");
    }
    else if(numeroFacto===0){
        return alert(`Numero factorial del ${numeroFacto} es igual a: 1`);
    }
    else{
       for(let i=1; i<=numeroFacto; i++){
          resultado*=i;
          console.log(resultado);
       }
       return alert(`El factorial del número ${numeroFacto} es igual a ${resultado}`);
    }
}

function conversionDolarReales(dolar){
    precioReal= 5.54;
    dolar = parseFloat(prompt("Ingrese su cantidad de dolares a cambiar"));
    return(alert(`Sus dolares se le pagaran en ${conversion= dolar*precioReal}`));
}

function calcularAreaRectangular(base, altura){
    base= parseInt(prompt("Ingrese la base del rectangulo:"));
    altura= parseInt(prompt("Ingrese la altura del rectangulo"));
    area = base*altura;
    perimetro = (base*2) + (altura*2);
    return(alert(`El area de tu tectangulo es de ${area}cm2 y su perimetro es igual a ${perimetro}cm.`))
}

function calcularValoresAreaCircular(radio){
   radio=parseFloat(prompt("Ingresa el radio del circulo:"));
   //Calcular ÁREA:
   area=pi*(radio*radio);
   //Calcular Perimetro
   diametro =radio*2;
   perimetro= pi*diametro;
   //Resultados
   return(alert(`El área de la sala es igual a: ${area.toFixed(2)} cm2. Y el perimetro es igual a: ${perimetro}cm2.`));
}

function generarTablaMultiplicardeN(numeroMult){
    numeroMult=parseInt(prompt("Ingrese el número del cuál requiere generar su tabla de multiplicar:"));
    //Ciclo que imprime la tabla
    for (let i =1; i<=10; i++){
        resultado=numeroMult*i;
        console.log(`${numeroMult} x ${i} = ${resultado}`);
    }
}

//Para ejecutar de forma individual cada una de las funciones que se indicaron hacer, usaremos un switch
switch(seleccionDelUsuario){
    case 1:
        calcularIMC();
        break;
    case 2:
        calularFactorial();
        break;
    case 3:
        conversionDolarReales();
        break;
    case 4:
        calcularAreaRectangular();
        break;
    case 5:
        calcularValoresAreaCircular();
        break;
    case 6:
        generarTablaMultiplicardeN();
        break;
    default:
        alert(`Una disculpa pero el valor ${seleccionDelUsuario} no es válido`);
}

