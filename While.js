       const gamePattern= ['blue', 'green', 'yellow', 'blue', 'red', 'yellow', 'red'];
const userClickedPattern= ['blue', 'green', 'yellow', 'blue', 'red', 'blue', 'green', 'yellow', 'green', 'red'];

var jugadorPerdio=new Boolean(false);
var i=0;
//un booleano siempre inicia como true
while (jugadorPerdio && i<=gamePattern.length) {
    console.log("gamePattern "+gamePattern[i]+" userClickedPattern "+userClickedPattern[i]);
    if (gamePattern[i]!=userClickedPattern[i])
      {
      jugadorPerdio=false;
      console.log("PERDIO " +gamePattern[i]+" vs "+userClickedPattern[i]);
    }
      i+=1;
      console.log("i "+i+" "+gamePattern.length )
}
