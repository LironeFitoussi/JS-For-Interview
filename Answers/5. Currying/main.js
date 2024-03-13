// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

// Option 1
/*
    const multiply = (num1) => {
    return (num2) => {
        return num1 * num2;
    };
    };
*/

// Option 2
const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(2)(5));

// Create a curry function
const curry = function (fn) {
  var arity = fn.length;
  console.log("arity", arity);
  return function f1(...args) {
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    }
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(2, 3, 6));
// What can your curried function do?
