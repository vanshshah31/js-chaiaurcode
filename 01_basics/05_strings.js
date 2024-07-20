const name = "Vansh";
const repoCount = 31;
//below line method not suitable
//console.log(name + repoCount + "Value");
// ` --> backticks and the below technique: string interpolation
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Vansh-SHAH-messi"); // here string is an object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(-2, 2); //(0, "2-1")
//console.log(newString);// DOESnt take negative ad instead start from 0

const anotherString = gameName.slice(-7, 7);
//console.log(anotherString);

const newStringOne = "   vansh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vansh.com/vansh%20shah";

console.log(url.replace('%20' , '_'));
console.log(url.includes('vansh'));

console.log(gameName.split('-'));// split to convert string to array
// see little on w3schools ans little from mdn