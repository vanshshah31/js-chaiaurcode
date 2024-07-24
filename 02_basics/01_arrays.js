//arrays

const myArr = [0, 1, 2, 3, 4, 5];
// in js array are resizeable means can be modified by size later on
//they are mixed : can be of different datatypes
// give shallow copy means copies share same reference
const myCars = ["BMW M3 ", "MERCEDES AMG G63", "AUDI RS7"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

//myArr.unshift(9); // add 7 at the start and shift other indices to right
//myArr.shift(); remove the unshifted  7 from the start and shift other indices to left
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(8));  // -1 bcoz doesnt exist

const newArr = myArr.join(); // converts array datatype to string

// console.log(myArr);
// console.log( typeof newArr);

// slice,splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr); // SPLICE changes originsl array by removing the inputted element from the original one and on its CONSOLE.LOG(1,3) gives (a , ... , n)
console.log(myn2); 