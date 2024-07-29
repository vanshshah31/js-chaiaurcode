//const tinderUser = new Object()  //--> Singleton ONJECT
const tinderUser = {}; // Non-Singleton OBJECT

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const twitchUser = {
  email: "vansh@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Vansh",
      lastname: "Shah",
    },
  },
};

console.log(twitchUser.fullname.userfullname.firstname);
