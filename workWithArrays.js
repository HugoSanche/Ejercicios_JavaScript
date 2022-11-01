
var numbers = [3, 56, 2, 48, 5];

console.log(numbers);

//Using map,filter,reduce this is the best way then used forEach

//Map -Create a new array by doing something with each item in an array.
const myNewArray=numbers.map(function(num){
  return num*2; //return a new array from the array numbers and multiply *2.
})
console.log(myNewArray);

//using forEach
var myNewArrayb=[]
numbers.forEach(function(item){
  myNewArrayb.push(item*2);
});
console.log(myNewArrayb);

/****************************************************************************************************************/

//Filter - Create a new array by keeping the items that return true.
const newArrayfilter=numbers.filter(function(items){
  return items >10
})
console.log(newArrayfilter);

var newArrayfilterb=[];
numbers.forEach(function(items){
  if (items<10)
    {
      newArrayfilterb.push(items);
    }
})
console.log(newArrayfilterb);

/****************************************************************************************************************/

//Reduce - Accumulate a value by doing something to each item in an array.
const newArrayReduce= numbers.reduce(function(items,accumulate){
  return accumulate+=items;
})
console.log(newArrayReduce);

var newArrayReduceb=0;
numbers.forEach(function(items){
  return newArrayReduceb+=items;
})
console.log(newArrayReduceb);

//Find - find the first item that matches from an array.
const numeroFind= numbers.find(function(num){
  return num>10;
})
console.log(numeroFind);

//FindIndex - find the index of the first item that matches.
const numeroFindIndex= numbers.findIndex(function(num){
  return num>50;
})
console.log(numeroFindIndex);
