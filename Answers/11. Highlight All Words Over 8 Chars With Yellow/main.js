// Write a function which implement range

// const range = (first, last) => {
//   const array = [];
//   for (let i = first; i <= last; i++) {
//     array.push(i);
//   }
//   return array;
// };

const range = (first, last) => {
  return [
    ...Array(last - first)
      .keys()
      .map((el) => el + first),
  ];
};

console.log(range(1, 50));

// range(1, 50)
// 1,2,3,4,5,6,...,50
