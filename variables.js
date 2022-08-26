//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

//Ejemplo 1
var a =5; //Global Variable
let x=10; //Global Variable
const Str="hugo"; //Global variable

caso1();
function caso1(){
  console.log (a);
  console.log(x);
}
console.log(a);
console.log(x);
console.log(Str);

//---------------------------------------------------------------------------------------------------------
//Ejemplo 2  Variables dentro de funciones
caso1();
function caso1(){
  var y =20;  //local variable
  let z=30;  //Local variable
  const S="hugo"; //Local variable
  console.log (y);
  console.log(z);
}
//console.log(y); //error
//console.log(z); //error

//---------------------------------------------------------------------------------------------------------------------------
//Ejemplo 3 Variables dentro de {} ya sea en if while, etc
var fecha=new Date();
var day =fecha.getDay();

if (day===0) {
  const semana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]; //Variable Local dentro de {}
  console.log (semana[0]);
}
else if(day===1) {
  var m=50;          //Variable Global dentro de {}
  console.log (m);
}
else if(day===2) {
  let n=100;         //Variable Local dentro de {}
  console.log (n);
}
//console.log (semana[0]); //Error es una variable local
console.log (m);          //No marca error ya que es una variable global
//console.log (n); //Error es una variable local

//---------------------------------------------------------------------------------------------------------------
//Ejemplo 4 Que pasa cuando se ocupa la variable y aun no esta declarada?
console.log(c);  //marca undefinid
var c=200;
console.log(c);


//console.log(d);      Marca error no puede leer d antes de ser declarada
let d=300;
console.log(d);

//---------------------------------------------------------------------------------------------------------------
//Ejemplo 5 Como funcionan las variables declaradas como const
const MY_ARRAY=[];
//IT possible to push items into array
MY_ARRAY.push("A"); //["A"]

//however, assignin a new array to the variable throws an error
MY_ARRAY=["B"]; //ERROR

//---------------------------------------------------------------------------------------------------------------
//Ejemplo  Como funcionan las OBJETOS declaradas como const
const MY_OBJECT={'key':'value'};

//attemting to overwrite the object throws an error
MY_OBJECT={'OTHER VALUE':'value'};

//however, object keys are not protected
//so the follwing is executed without problems
MY_OBJECT.key='other value'
