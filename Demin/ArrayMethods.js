/* For each of the sections, consider the array and the method.  What would you expect the output to be? */
let letters = ["l", "s", "a", "r", "d", "f"];
// letters.sort()// letters.pop()// letters.push('q')// letters.shift()// letters.unshift('y')// letters.slice(1,2)
// console.log(letters.sort());
// letters.pop();
// console.log(letters);
// letters.push("q");
// console.log(letters);
// letters.shift();
// console.log(letters);
// letters.unshift("y");
// console.log(letters);
// console.log(letters.slice(1, 2));
// names.concat(letters)// names.join(' ')// names.reverse()
let names = ["John", "Mandeep", "Ruby", "Rose", "Jackson"];
// console.log(names.concat(letters));
// console.log(names.join(" "));
// console.log(names.join(" "));
// console.log(names.join(" - "));
// console.log(names.join(" * "));
// console.log(names.reverse());
// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".
let superheroes = ["Wonder Woman", "Captain America", "Spiderman", "Batman", "The Flash"];
// for (let hero of superheroes) {
//   console.log(`${hero} is a superhero!`);
// }
// iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentence "<NAME> is a superhero!".
let superheroesDetails = [
  {
    id: 1,
    name: "Wonder Woman",
    isDC: true,
  },
  {
    id: 1,
    name: "Captain America",
    isDC: true,
  },
  {
    id: 1,
    name: "Batman",
    isDC: true,
  },
  {
    id: 1,
    name: "The Flash",
    isDC: true,
  },
  {
    id: 1,
    name: "Spiderman",
    isDC: false,
  },
];

// for (let hero of superheroesDetails) {
//   if (hero.isDC === true) {
//     console.log(`${hero.name} is in the Justice League!`);
//   } else if (hero.isDC === false) {
//     console.log(`${hero.name} is a superhero!`);
//   } else console.log(`You aint special!`);
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const outfits = [
  {
    id: 1,
    bottoms: "slacks",
    top: "orange",
    shoes: "leather",
    style: "formal",
    own: false,
  },
  {
    id: 3,
    bottoms: "jeans",
    top: "t-shirt",
    shoes: "flip flops",
    type: "casual",
    own: true,
  },
  {
    id: 2,
    bottoms: "yoga",
    top: "tank top",
    shoes: "flip flops",
    type: "casual",
    own: false,
  },
  {
    id: 9,
    bottoms: "skirt",
    top: "blouse",
    shoes: "heals",
    type: "formal",
    own: true,
  },
  {
    id: 6,
    bottoms: "shorts",
    top: "tank top",
    shoes: "none",
    type: "casual",
    own: true,
  },
  {
    id: 7,
    bottoms: "jeans",
    top: "sweater",
    shoes: "boots",
    type: "casual",
    own: true,
  },
  {
    id: 8,
    bottoms: "slacks",
    top: "button down",
    shoes: "dress",
    type: "formal",
    own: false,
  },
];

/* considering the array outfits, use map, filter and find to do the following */

//Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.
// let outfitsCopy = [...outfits];
let clonedArray = outfits.map((a) => {
  return { ...a };
});
// console.log(outfitsCopy);
//Change a value on outfitsCopy and use console logs to show you did not change outfits
clonedArray[0].bottoms = "pants";
console.log(clonedArray);
console.log(outfits);
// console.log(outfits);
//Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.

//Make a copy (map) of outfits that contains on the properties of id, bottoms, tops and shoes

//filter outfits to give only outfits that are casual// filter outfits to give only outfits that are owned

// use find to return an outfit that has no shoes// use find to return an outfit that has boots//Bonus:// use find to return an outfit that has jeans and a t-shirt
