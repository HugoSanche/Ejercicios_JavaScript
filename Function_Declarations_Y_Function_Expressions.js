
//https://www.youtube.com/watch?v=gjLn95skIKE

console.log(doSomething);
//en una funcion de declaracion si puede si puede ser llamada antes de su declaracion
doSomething();

function doSomething(){
  console.log("Esto es una declaracion");
}

//cuando es una funcion expression no se puede llamar antes de ser declarada
//Marca error si la llamas antes de ser declarada
//something();
//por lo que entiendo se iniciliaza la variable something en memoria pero no se le asigna nada hasta que lo lea
var something=function(){
  console.log("Esto es una expresion");
}


console.log("Dos ",something);
// Debe ir despues de su delcaracion
something();

console.log("--------------------------------otro--------------");

var runIt= function(a){
  console.log("Lo que contiene la funcion "+a);
  a();
}

runIt(function(){
  var x="Run";
  console.log("Empiezo a "+x);
});
