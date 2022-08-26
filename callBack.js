//fn funciona como callBack
function doHomeWork(task,fn){
  console.log("Comienza la tarea "+task);
  //estas mandanto a llamar la funcion alertFinished
  fn();
}

function alertFinished(){
  console.log("Tarea Finalizada");
}
doHomeWork("MAtematicas", alertFinished);

function anotherEventListener(typeOfEvent,callBack){
  var eventThatHappened={
    eventType:"KeyPress",
    keyPress:"P",
    timePress:"5",
  };

var x=["hugo","Sanchez"];


if (typeOfEvent===eventThatHappened.eventType){
    callBack(x);
  }
}

anotherEventListener("KeyPress",function test(e)
{
  console.log(e);
});
