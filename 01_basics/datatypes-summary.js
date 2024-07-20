// based on how data are stored in memory and are accessed they are categorized into PRIMITIVE & NON-PRIMITIVE

// # Primitive(Call by value means its copy is given and not the original data reference)

const score = 100;
const scoreValue = 100.3; // no need to define float here
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // means undefined

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id === anotherId);

const bigNumber = 235476111111113n; // BigInt

// In JavaScript, variables do not have an explicitly declared type. The type is determined at runtime based on the value assigned to the variable.Hence its DYNAMICALLY TYPED LANGUAGE

// 7 types :  String , Number , Boolean , null , undefined , Symbol , BigInt

// # non-Primitive(Reference type)

// Arrays , Objects , Functions

const heros = ["ironman", "superman", "batman"];
let myObj = {
  name: "Vansh", // let myObj={name:"vansh" ',' not ';'}
  age: 18,
};

const myFunction = function () {
  console.log("Hello World");
};

//onsole.log(typeof bigNumber);
//READ: https://262.ecma-international.org/5.1/#sec-11.4.3
// assignment: make comments of each datatypes and what they return

// -----------------x---x---x----------------

// Memory--> Stack(Primitive,we get copy) , Heap(Non-primitive & Reference type)

//stack
let myYoutubename = "vansh.shah_31";
let anotherName = myYoutubename;
anotherName = "olaamigo";
// console.log(anotherName);
// console.log(myYoutubename);

// heap
let userOne = {
  email: "user.google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "vansh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
