// What will be logged here?

//? Task 1
// function getItem() {
//   console.log(this);
// }

// getItem();

//! Output: Window

//? Task 2
// const item = {
//   title: "Ball",
//   getItem() {
//     console.log("this", this);
//   },
// };

// item.getItem();

//! Output: item {Object}

// Task 3
// class Item {
//   title = "Ball";
//   getItem() {
//     function someFn() {
//       console.log("this", this);
//     }
//     someFn();
//   }
// }

// const item = new Item();
// item.getItem();

//! Output: undefined
