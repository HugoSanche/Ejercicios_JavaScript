const animals = [
  { name: "cat", sound: "meow", comoAlimentar:{comida:2,agua:3} },
  { name: "dog", sound: "woof" },
  { name: "horse", sound: "Hii",comoAlimentar:{comida:3,agua:4} },
  {name: "cow",sound:"muu"}
];
//destructuring arrays
const [cat, dog, horse] = animals;
console.log(horse);

//Destructuring objects
const {name:nameAnimal, sound:soundAnimal}=cat;
console.log(nameAnimal, soundAnimal);

const {name,sound,comoAlimentar}=cat;
console.log(comoAlimentar);

const {name:nameHorse,sound:SoundHorse,comoAlimentar:{comida:comidaHorse,agua}}=horse; //se puede cambiar el nombre
console.log(comidaHorse);
