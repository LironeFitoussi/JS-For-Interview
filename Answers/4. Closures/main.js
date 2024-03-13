// Create a counter function which has increment and getValue functionality
const privateCounter = () => {
  let count = 0;

  return {
    increment: () => count++,
    getValue: () => count,
  };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
