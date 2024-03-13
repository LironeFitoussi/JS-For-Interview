// Create a es6 module with function getName, getSurname and default export getFullname.
// import getFullName, { getName, getSurname } from "./es6.js";
const getFullName = require("./common");
console.log(
  //   getName("Jacob"),
  //   getSurname("Jack Eury"),
  getFullName("Jacob", "Jack Eury")
);
// Create the same with commonJS module
// What is the difference?
