/*

Funciones Anónimas y su uso en JavaScript
Las funciones anónimas en JavaScript son aquellas que no tienen un nombre y solo pueden ser asignadas a una variable o utilizadas como argumento de otra función. Esta forma de declaración previene el hoisting y puede ser útil para agrupar código en una función puntual, sin la necesidad de reutilizarla en otros puntos del código. 
También son útiles para pasar funciones como argumento a otra función.

Uso de callbacks en funciones anónimas
Un callback es un parámetro en una función que es una función en sí misma. En JavaScript, las funciones anónimas son comúnmente utilizadas como callbacks, lo que da flexibilidad al código permitiendo cambiar el resultado de una salida sin necesidad de modificar la función original. 
Esto permite tener varias formas de formatear una salida según la necesidad.

Funciones auto-invocadas
Las funciones auto-invocadas son otro tipo de funciones anónimas que se invocan automáticamente en el mismo momento que se ejecuta el script. Aunque pueden parecer complejas de leer, son muy útiles en el ámbito web en JavaScript. Permiten ejecutar todo el contenido de la función en el mismo momento que el script es ejecutado y sus argumentos y parámetros son opcionales.



*/

let funcAnonymous = function (parameterOne) {
  return parameterOne + ":)";
};

//
function getCopyright(name, year, callback) {
  let copyright = callback(name, year);
  return copyright;
}

let formatWithPipe = function (name, year) {
  return name + "|" + year;
};

let formatWithHypen = function (name, year) {
  return name + "-" + year;
};

getCopyright("Aramando", 2023, formatWithHypen);

//
function exampleAutoInvocation(name, year, callback) {
  let autoInvocation = callback(name, year);
  return autoInvocation;
}

function getFunctionAnonymousInArguments(name, year, callback) {
  let returnCallBackAnonymous = callback(name, year);
  console.log("here value callback", returnCallBackAnonymous)
  return returnCallBackAnonymous;
}

getFunctionAnonymousInArguments("armando", 22, function (name, year) {
  return name + "|||" + year;
});

// function auto - invocada
(function (name, year) {
  console.log("Auto invocate ")
  console.log(name + "-" + year);
})("Armando", 2023);

//other form
!(function (name, year) {
  console.log("Auto invocate other form")
  console.log(name + "-" + year);
})("Armando", 2023);

//exercise

let testAnonymous = function (name, year = 200) {
  return name + "-" + year;
};

console.log(testAnonymous("Ewin"));
