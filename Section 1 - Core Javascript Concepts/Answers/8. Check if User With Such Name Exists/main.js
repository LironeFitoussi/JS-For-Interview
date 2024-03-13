// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

// const isNameExists = (name, users) => users.some((user) => user.name === name);
const isNameExists = (name, users) => {
  // const user = users.find((user) => user.name === name);
  // return Boolean(user);

  const index = users.findIndex((user) => user.name === name);
  return index !== -1;
};

// const isNameExists = (name, users) => {
//   let exists = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// };

console.log(isNameExists("John", users));
console.log(isNameExists("Lirone", users));
