const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);
//console.log(typeof(balance));

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966;
//console.log(otherNumber.toPrecision(3)); // imp and little tricky

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++Maths++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(-4.3));
// console.log(Math.ceil(-4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(-4.3));
// console.log(Math.floor(4.3));

// console.log(Math.min(4 , 3 , 6 , 8));
// console.log(Math.min(4 , 3 , 6 , 8));

// console.log(Math.random()); // gives value from 0 to 1
// console.log(Math.random() * 10 + 1); // here +1 ensures that 0 values don't come
// console.log(Math.floor(Math.random() * 10 )+ 1); Math.floor gives integer

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) ) + min);//imp// max-min gives range// 1 added to remove 0 // +min su from 10 min
