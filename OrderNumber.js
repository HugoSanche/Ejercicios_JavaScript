let array=[5,3,8,1,9,2,4,6,7];
let temp;

for(let i=0; i<array.length-1; i++)
{
//  let bandera=new Boolean(false);
//  do {
  //  bandera=false;
    for (let j=0; j<array.length-1; j++)
      {
        if (array[j]>array[j+1])
          {
            temp=array[j+1];
            array[j+1]=array[j];
            array[j]=temp;
            //bandera=true;
          }
        }
  //} while (bandera==false);

}
console.log(array);
