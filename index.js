const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge=(pet)=> {
  return new Date().getFullYear() - pet.bornOn;
 // console.log("--"+JSON.stringify(pet));

}

const petsWithAge = [];
let i=0;
pets.map(()=> {
  
  let pet = pets[i];
   pet.age=getAge(pet);
i++
  petsWithAge.push(pet);
  
})
console.log(petsWithAge)


const dogs = [];
for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);



var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    pet.age=getAge(pet);
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");
