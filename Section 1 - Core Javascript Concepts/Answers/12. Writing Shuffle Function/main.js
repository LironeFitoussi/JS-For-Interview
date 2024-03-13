// Write a function which implements shuffle
const shuffleItems = (items) => {
  return items
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => {
      return item1.sort - item2.sort;
    })
    .map((item) => item.value);
};
