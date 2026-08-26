const reverseArray = (arr) => arr.reverse();

const findLargest = (numbers) => {
  // handle error incase a non array is passed
  if (!(numbers instanceof Array)) {
    throw new Error("Numbers must be an array");
  }

  let largest = numbers[0];
  for (let num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};

module.exports = {
  reverseArray,
  findLargest,
};
