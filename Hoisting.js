// Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables
// y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad.
// Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación,
// pero quedan exactamente en dónde las has escrito en el código.

// Lo que entiendo es que hosting es cuando puedes llamar a un funcion aun sin ser declarada
//PUEDES OBSERVAR QUE LA FUNCION nombreDelGato PUEDES LLAMARLA ANTES O DESPUES DE DECLARARLA Y FUNCIONA
function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}


nombreDelGato("Maurizzio");
/*
El resultado del código es: "El nombre de mi gato es Maurizzio"
*/

//Llamas a la funcion antes de delcararla y funciona
nombreDelGato2("Dumas");
function nombreDelGato2(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/

// VARIABLES

var x=5;

(function () {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());
