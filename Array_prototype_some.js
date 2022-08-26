const gamePattern= ['blue', 'green', 'yellow', 'blue', 'red', 'yellow', 'red'];

const userClickedPattern= ['blue', 'green', 'yellow', 'blue', 'red', 'blue', 'green', 'yellow', 'green', 'red'];

const array = [1, 2, 3, 4, 5,7,8];
//
// // checks whether an element is even
// const even = (element) => element % 2 === 0;
//
// console.log(array.some(even));
// // expected output: true


gamePattern.some(function(el) {
  console.log(el);
  return el === 7;
});
