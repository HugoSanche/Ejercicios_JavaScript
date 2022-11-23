const animals = [
  { name: "cat", sound: "meow", comoAlimentar:{comida:2,agua:3} },
  { name: "dog", sound: "woof" },
  { name: "hors", sound: "Hii",comoAlimentar:{comida:3,agua:4} },
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


const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

const [honda, tesla]=cars;
console.log(tesla);
