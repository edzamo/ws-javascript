let myFruit = "watermelon";

switch (myFruit) {
  case "orange":
  case "lemon":
    console.log("citric");
    break;
  case "banana":
    console.log("tropical");
    break;
  case "watermelon":
    console.log("Big Fruit");
    break;

  default:
    break;
}

//Ternario

let motoBrand = "kawasaki-";
let availableBrand = new Set(["honda", "kawasaki", "bmw"]);

let brand = availableBrand.has(motoBrand) ? "available" : "not available";

console.log(brand);

let nameAnimal = "felino";
let objectAnimals = { felino: "cat", perruno: "dog", vuelo: "gallo" };

console.log( nameAnimal in objectAnimals );
