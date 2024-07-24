let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDatee = new Date(2023, 0, 23, 5, 3);
// let myCreatedDateee = new Date("2023-01-14"); // Months start from 0 in js eg: jan=0; //YYYY/MM/DD For this syntax jan:01

let myCreatedDateeee = new Date("01-14-2023");
//console.log(myCreatedDateeee.toLocaleString());

let myTimStamp = Date.now();
// console.log(myTimStamp);// for creating quizes
// console.log(myCreatedDateeee.getTime());
//console.log(Math.floor(Date.now() / 1000)); // DIDNT UNDERSTAND but this technique reduces spaces

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 21);

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default' , {
     weekday:"long",
     })
     
