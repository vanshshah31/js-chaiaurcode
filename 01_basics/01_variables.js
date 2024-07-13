const accountId = 144553
let accountEmail = "vansh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "31vanshshah@gmail.com"
accountPassword = "555555"
accountCity = "Ahmedabad"

//console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);
