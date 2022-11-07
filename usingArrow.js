
var numbers = [3, 56, 2, 48, 5];

//with out using Arrow
const myNewArray1=numbers.map(function(num){
  return num*2; //return a new array from the array numbers and multiply *2.
})
console.log(myNewArray1);

//Using Arrow => (simplificado 1)
const myNewArray2=numbers.map((num)=>{
  return num*2; //the same function return a new array from the array numbers and multiply *2.
})
console.log(myNewArray2);

//Using Arrow => (simplificado 2)
const myNewArray3=numbers.map(num=> num*2); // the same function return a new array from the array numbers and multiply *2.
console.log(myNewArray3);

//Using Arrow => with 2 parameters
const newArrayReduce= numbers.reduce((items,accumulate)=>accumulate+=items); // "check dont delete () when ususing 2 parameters 'items, accumulate' " This return acumate from items of array
console.log(newArrayReduce);
