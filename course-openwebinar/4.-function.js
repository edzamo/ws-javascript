/*

Una función es un bloque de código que realiza un conjunto de tareas o cálculos de forma cohesiva.

Uso de una funcion 
Cuando un software se compone de varios archivos, podemos encontrarnos con la necesidad de repetir la misma declaración de variables y acciones en diferentes archivos.

*/


function getCopyright(){
    let copyright= "Ewwin - 2023";
    
}


let result=getCopyright();
console.log(result);

/*
Parametros y argumentos en funciones
En este texto se explica la función de los parámetros y argumentos en las funciones de programación. Un parámetro es un valor externo que se recibe como argumento al invocar una función. Estos pueden ser de cualquier tipo y se indican al declarar la función separados por comas dentro de los paréntesis.

*/ 

function getCopyright(name, year){
    let copyright= name+" " + year;
    return copyright;
}

let resultParameter= getCopyright("Edwin",2018);
console.log(resultParameter);

/*
Hositing en JavaScript

En JavaScript, el hoisting era el efecto que se producía al declarar variables con var, donde el intérprete reservaba la memoria necesaria antes de ejecutar la primera línea del script.


Funciones y el hoisting

A diferencia de las variables, que producen un error tipado como ReferenceError si intentamos acceder a una variable que no ha sido inicializada, las funciones siempre se inicializan con undefined y function respectivamente. 

*/ 

