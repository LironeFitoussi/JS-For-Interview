const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

let names = [];

//? 1. Write code to get array of names from given array of users
// Option 1
/*
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
*/

// Option 2
/* 
  for (user of users) {
    names.push(user.name);
  }
*/

// Option 3
/* 
users.forEach((user) => {
  names.push(user.name);
});
*/

//! Option 4
// names = users.map((user) => user.name);

//? 2. Get back only active users
// Option 1
/*
  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
      names.push(users[i].name);
    }
  }
*/

// Option 2
/* 
  for (user of users) {
    if (users[i].isActive) {
      names.push(users[i].name);
    }
  }
*/

// Option 3
/* 
  users.forEach((user) => {
    if(user.isActive){
      names.push(user.name);
    }
  });
*/

// Option 4
/* 
  names = users.map((user) => (user.isActive) && user.name);
*/

//! Option 5
/* 
  names = users.filter((user) => user.isActive).map((user) => user.name);
*/

//? 3. Sort users by age descending
// Option 1
/*
users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    names.push(users[i].name);
  }
}
*/

// Option 2
/* 
  users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
  for (user of users) {
    if (users[i].isActive) {
      names.push(users[i].name);
    }
  }
*/

// Option 3
/* 
  users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
  users.forEach((user) => {
    if(user.isActive){
      names.push(user.name);
    }
  });
*/

// Option 4
/* 
  names = users
    .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
    .map((user) => (user.isActive) && user.name);
*/

//! Option 5

names = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .map((user) => user.name);

console.log("names", names);
