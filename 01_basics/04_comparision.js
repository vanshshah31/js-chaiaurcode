// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that "==" and "> < >= <=" work differently.Comparisions convert null to a number treating it as 0. So [3] nul >=0 is true and [1] null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
