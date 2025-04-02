/**
 *Operador yield y funciones generadoras
El operador yield se utiliza en las funciones generadoras para mantener el estado del generador y pausar la iteración, permitiendo retomarla en otro momento. A diferencia de return, yield no devuelve un valor, sino que lo cede y devuelve un objeto con dos propiedades: value y done, que indica si la función generadora ha finalizado.

La sintaxis de una función generadora requiere usar el asterisco (*) junto al nombre de la función, y acepta parámetros en su declaración. El uso de yield es esencial en el cuerpo de la función para ceder valores por cada vez que se solicite un valor del generador.

Uso de funciones generadoras
Aunque no siempre es necesario utilizar una función generadora con un bucle, se puede utilizar de forma manual para acumular estados y ceder valores en momentos específicos del código. La función next() se puede usar para obtener los valores del generador en diferentes puntos del código y seguir realizando acciones e instrucciones.
 
🔹 Características clave de las funciones generadoras
	1.	Uso de function*: Se diferencian de las funciones normales por el * en la declaración.
	2.	Pausan su ejecución con yield: Cada vez que encuentran un yield, se detienen y devuelven un valor.
	3.	Reanudan su ejecución con .next(): Se pueden continuar desde donde se pausaron.
	4.	Devuelven un objeto Generator: Este objeto permite iterar sobre la función usando .next(), for...of o el operador spread (...).

 */

function* extractNumber(attempts) {
  for (let interaction = 0; interaction < attempts; interaction++) {
    yield Math.floor(Math.random() * 91);
  }
}

let cpu = 0;
let player = 0;

//cpu
let cpuGenerator = extractNumber(2);
cpu += cpuGenerator.next(2);
cpu += cpuGenerator.next(2);

//player
let playerGenerator = extractNumber(2);
player += playerGenerator.next(2);
player += playerGenerator.next(2);


console.log(cpu > player ? "CPU win" : "Player Win");
