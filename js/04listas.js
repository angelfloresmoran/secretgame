//Ejercicios del módulo Listas
let listaGenerica=[];
let lenguajesDeProgramacion=['Javascript','C','C++','Kotlin','Python'];
let listaNumerica=[3,2,7,5,6,10,7,34];//out = 74

function mostrarListaLenguajes(){
    lenguajesDeProgramacion.push('Java','Ruby','GoLang');
    return console.log(lenguajesDeProgramacion);
}
mostrarListaLenguajes();

function mostrarListaInvertida(){
    return console.log(lenguajesDeProgramacion.reverse());
}
mostrarListaInvertida();

function calcularPromedio(){
    let suma=0;
    for (let i=0; i<listaNumerica.length; i++){
        suma +=listaNumerica[i];
    }
    return console.log(`El promedio del arreglo númerico es de: ${suma/listaNumerica.length}`);
}
calcularPromedio();

function operacionesLista(){
    let numeroMayor=listaNumerica[0];
    let numeroMenor=listaNumerica[0];
    for(let i=1; i<listaNumerica.length; i++){
        if(listaNumerica[i]>numeroMayor){
            numeroMayor=listaNumerica[i];
        }
        if(listaNumerica[i]<numeroMenor){
            numeroMenor=listaNumerica[i];
        }
    }
    console.log(`El valor más alto de la lista es el: ${numeroMayor} y el valor mas bajo es el ${numeroMenor}`);
    return;
}
operacionesLista();

function sumaArreglo(){
    let sumaValores=0;
    for(let i=0; i<listaNumerica.length;i++){
        sumaValores+=listaNumerica[i];
    }
    return console.log(sumaValores);
    
}
sumaArreglo();

function buscarValor(numeroRastrear){
    if(listaNumerica.includes(numeroRastrear)){
        return alert(`Felicidades su número ${numeroRastrear} si se encuentra en la lista, en la posición ${listaNumerica.indexOf(numeroRastrear)}`);
    }else
    {
        return alert (`El número ${numeroRastrear} no se encuentra en la lista por tanto vale -1`);
    }
}
numeroRastrear=parseInt(prompt('Ingrese el número que desea buscar en la lista:'));
buscarValor(numeroRastrear);

function sumarArreglos(){
    let arreglo1=[3,6,10,45,23,89];
    let arreglo2=[90,10,3,1,5,100];
    let arregloCombinado=arreglo1.concat(arreglo2);
    return console.log(`El arreglo combinado tiene los siguientes elementos: ${arregloCombinado}`);
}
sumarArreglos();

function listaQueDevuelveCuadradosDeElementos(lista){
    let listaElevadosAcuadrado=[];
    for(let i=0; i<lista.length;i++){
        listaElevadosAcuadrado.push(lista[i]*lista[i]);
    }
    return console.log(listaElevadosAcuadrado);
}
let listaBase =[4,6,23,24,9,89,45,12,1,5,6,29];
listaQueDevuelveCuadradosDeElementos(listaBase);

