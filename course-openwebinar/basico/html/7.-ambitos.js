/*

En JavaScript existen cuatro ámbitos o contextos: el global, el de función, el de bloque y el de módulo. 
Cada ámbito determina el alcance de las expresiones y valores dentro de un contexto y tiene una jerarquía unidireccional, en la que el ámbito global es el padre y los demás son hijos. 
Los hijos pueden acceder a la información de sus padres, pero no al revés.

Global
función
bloque
modulo

*/

let company = "OpenWebinar";
const year = 2023;

 function getAcademy() {
  let format = "FORM " + company;
  if (!year) {
    let format = "Make in " + company;
    return format;
  }

  return format + " in " + year;
};

console.log("result", getAcademy());
