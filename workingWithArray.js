//import emojipedia.js and extract the first 100 charcteres from the item meaning
import emojipedia from "./emojipedia.js"
//console.log(emojipedia[0].meaning);

// emojipedia.forEach((item, i) => {
//   console.log(item.meaning.substring(1,100));
// });

const myNewEmojiArray=emojipedia.map(function(num){
  return num.meaning.substring(1,100)
})
console.log(myNewEmojiArray);
