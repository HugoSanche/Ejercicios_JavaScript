

//Como funciona forEach

const colores= ['blue', 'green', 'yellow', 'blue', 'red', 'yellow', 'red'];

//item=valor actual, index=indice del arreglo, array=lo que contiene el arreglo
colores.forEach((item, index,array) => {
  console.log("El valor de "+index+" es "+item+"  "+array);
});
