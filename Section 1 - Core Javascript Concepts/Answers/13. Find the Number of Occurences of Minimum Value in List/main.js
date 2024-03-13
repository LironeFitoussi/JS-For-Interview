// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3, 1, 1];
const minVal = Math.min(...arr);
minArr = arr.filter((el) => el === minVal);
console.log(minArr.length);
