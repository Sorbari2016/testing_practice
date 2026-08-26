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

export { capitalize, reverseString };
