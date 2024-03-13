// Remove all duplicates in the array
// const uniqueArr = (arr) => {
//   return [...new Set(arr)];
// };

// const uniqueArr = (arr) => {
//   const result = [];
//   arr.forEach((num) => {
//     if (!result.includes(num)) {
//       result.push(num);
//     }
//   });
//   return result;
// };

const uniqueArr = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};

console.log(uniqueArr([1, 2, 2, 4, 4]));
