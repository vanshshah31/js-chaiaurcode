// singleton created by constructors and not literals

// object literals
//Object.create   // constructor method

const mySym = Symbol("key1"); //symbol

const JsUser = {
  name: "Haaland",
  full_name: "Erling Haaland",
  [mySym]: "mykey1",
  age: 24,
  country: "Norway",
  jersey_number: 9,
  email: "haaland@mancity.com",
  eplwinner: "Manchester city",
  isGoat: true,
  training_days: ["Monday", "Wednesday", "Friday", "Saturday"],
};
//console.log(JsUser.eplwinner);
// console.log(JsUser["full_name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "debruyne@mancity.com"; // overwriting
//Object.freeze(JsUser); // for locking
JsUser.email = "foden@mancity.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user , ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
