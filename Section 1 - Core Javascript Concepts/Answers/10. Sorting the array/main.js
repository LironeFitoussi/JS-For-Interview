// Sort the array of numbers
const arr = [5, 1, 60, 10];
const newArr = arr.sort((a, b) => a - b);
console.log(newArr);

// Sort array of objects by author's lastname
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

const sortedBooks = books.sort((book1, book2) => {
  const author1 = book1.author.split(" ")[1];
  const author2 = book2.author.split(" ")[1];
  return author1 < author2 ? -1 : 1;
});

console.log(sortedBooks);
