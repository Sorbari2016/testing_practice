// Create a function that takes a string and return the first letter capitalized
const capitalize = (str) => {
  // check if str is an actual string
  if (typeof str !== "string") {
    throw new Error("str must be a string");
  }

  // check if str is provided
  if (!str || str.trim() === "") {
    throw new Error("str is required!");
  }

  // check if str is just a char
  if (str.length === 1) {
    return str.toUpperCase();
  }

  // remove extra spaces from str
  let cleanStr = str.trim();

  return cleanStr.charAt(0).toUpperCase() + cleanStr.slice(1).toLowerCase();
};

// Create a reverseString function that takes a string and returns it reversed.

const reverseString = (str) => {
  // check if str is actually a string
  if (typeof str !== "string") {
    throw new Error("str must be a string");
  }

  // check if str was provided
  if (!str || str.trim() === "") {
    throw new Error("str is required!");
  }

  // check if str is just a letter
  if (str.length === 1) {
    return str;
  }

  return str.split("").reverse().join("");
};

/* Create an analyzeArray function that takes an array of numbers and returns an object 
with the following properties: average, min, max, and length.
*/
const analyzeArray = (arr) => {
  // check if arr is an array
  if (!(arr instanceof Array)) {
    throw new Error("arr MUST an array");
  }

  // check if arr is empty
  if (!arr || arr.length < 1) {
    throw new Error("arr MUST be an array with atleast one item");
  }

  return {
    average:
      arr.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
  };
};

export { capitalize, reverseString, analyzeArray };
