// Write a function which can concatenate 2 arrays
const mergedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
  // return arr1.contact(...arr2);
  //   arr1.push(...arr2);
  //   return arr1;
};

const arr1 = [2, 5, 6];
const arr2 = [1, 3, 4];
const result = mergedArrays(arr1, arr2);
console.log(result, arr1, arr2);
