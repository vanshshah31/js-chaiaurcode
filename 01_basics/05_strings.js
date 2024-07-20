const name = "Vansh";
const repoCount = 31;
//below line method not suitable
//console.log(name + repoCount + "Value");
// ` --> backticks and the below technique: string interpolation
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Vansh");// here string is an object

console.log(gameName[0]);
console.log(gameName.__proto__);

