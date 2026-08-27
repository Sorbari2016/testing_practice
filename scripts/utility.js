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

/*  Create A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
Each of these functions should take two numbers and return the correct calculation.
*/

const calculator = {
  // add
  add(a, b) {
    // check if arg provided are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers are allowed");
    }

    return a + b;
  },

  // subtract
  subtract(a, b) {
    // check if arg provided are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers are allowed");
    }

    return a - b;
  },

  // multiply
  multiply(a, b) {
    // check if arg provided are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers are allowed");
    }

    return a * b;
  },

  // divide
  divide(a, b) {
    // check if arg provided are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers are allowed");
    }

    // check if the divisor is 0
    if (b === 0) {
      throw new Error("Can't divide by 0");
    }

    return a / b;
  },
};

// Create a function that takes a string and a shift factor and returns it with each character “shifted
const caesarCipher = (str, factor) => {
  // check if first str is actually a string
  if (!str || typeof str !== "string" || str.trim() === "") {
    throw new Error("str must be a string");
  }

  // check if factor is a number
  if (typeof factor !== "number") {
    throw new Error("factor must be a number");
  }

  // check if factor is less than 0
  if (factor < 0) {
    throw new Error("factor must not be less than 0");
  }

  // check if factor is exactly 0
  if (factor === 0) {
    return str;
  }

  // increase codepoint
  let increasedCodePoints = str
    .split("")
    .map((string) => increaseCodePoint(string, factor));

  // get the new alphabets
  return increasedCodePoints
    .map((item) => getAlphabetFromCodePoint(item))
    .join("");
};

let increaseCodePoint = (str, factor) => {
  if (!str) return str;
  let code = str.codePointAt(0);

  if (/[a-z]/.test(str)) {
    let nextCode = code + factor;
    return nextCode > 122 ? ((nextCode - 97) % 26) + 97 : nextCode;
  }

  if (/[A-Z]/.test(str)) {
    let nextCode = code + factor;
    return nextCode > 90 ? ((nextCode - 65) % 26) + 65 : nextCode;
  }

  return str;
};

let getAlphabetFromCodePoint = (num) => {
  if (typeof num !== "number") {
    return num;
  }

  return String.fromCharCode(num);
};

export { capitalize, reverseString, analyzeArray, calculator, caesarCipher };
