/*

TIPOS DE DATOS NO PRIMITIVOSARRAY 
ARRAY 
● Colección de elementos 
    ○ Almacenan datos de cualquier tipo, sin restricción 
    ○ Cada dato posee un índice 
    ○ El primer dato tiene índice 0 (cero) 
    ○ Son redimensionables 
    let user =[]

SET 
● Colección de elementos únicos 
    ○ Almacena datos de cualquier tipo 
    ○ Los datos son únicos, nunca se repiten (para no tener duplicados)
    ○ Es una colección no indexada, pero se puede iterar 
    let uniqueArray = new Set( );


   
MAP 
● Colección de elementos indexados por clave 
    ○ Admite cualquier tipo de dato 
    ○ Se mantiene el orden de inserción 
    ○ Es iterable y los elementos accesibles mediante su identificador, su clave 
    ○ Las claves de un Map pueden ser de cualquier tipo 
    let carParts = new Map( );
    

OBJECT 
● Es una colección de propiedades 
    ○ Admite cualquier tipo de dato 
    ○ No mantiene el orden de inserción, se ordenan automáticamente 
    ○ No es iterable y los elementos son accesibles mediante su propiedad, su clave 
    ○ Las claves de un Object no pueden ser de cualquier tipo. Solo String 
    let client = { };
    
    OBJECT let client = { name: “Armando”, company: “OpenWebinars”}; 
    // Accedemos usando “.” Y el nombre de la propiedad 
     client.name;                  // “Armando” 
     client.company;         // “OpenWebinars

     
”WEAKSET 
● Colección de elementos únicos 
    ○ Almacena datos de cualquier tipo Solo almacena objetos 
    ○ Los datos son únicos, nunca se repiten 
    ○ Es una colección no indexada, pero se puede iterar 
    let uniqueArray = new WeakSet( );
    
WEAKMAP 
● Colección de elementos indexados por clave 
    ○ Admite cualquier tipo de dato 
    ○ Se mantiene el orden de inserción objetos. 
    ○ Es iterable y los elementos accesibles mediante su identificador, su clave. ○ Las claves de un Map pueden ser de cualquier tipo deben ser 
    let uniqueArray = new Set( );
    
DATE 
● Representa el tiempo en un momento concreto ○ Encapsula un número que representa milisegundos 
    ○ Su mínimo es el 1 de Enero de 1970 
    ○ La fecha que almacena es justo la del momento de creación del objeto 
    let date = new Date( );


*/

let namesArray = ["Edwin", "Pedro", "Martha", "Paula"];
console.log(namesArray);
console.log(namesArray[1]);

let namesSet = new Set([1, 7, 8, "hola"]);
console.log(namesSet);
namesSet.add("KK");
console.log(namesSet, namesSet.size);

let namesMap = new Map([
  [1, "Edwin"],
  [2, "Paula"],
]);
console.log(namesMap.get(1));
namesMap.set(3, "Pedro");
console.log(namesMap);

let usedObject = {
  name: "Elvin",
  secondName: "Zamora",
};

console.log(usedObject.name);

let currentDate = new Date();
let secondCurrentDate = new Date();

console.log(currentDate, secondCurrentDate);
