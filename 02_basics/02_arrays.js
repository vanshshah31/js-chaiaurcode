const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

//marvel_heros.push(dc_heros);// dc_heros pushed as a single element in the array at index 3 in marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); //same as concat, PREFFERED over CONCAT

