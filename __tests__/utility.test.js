// imports
import {
  capitalize,
  reverseString,
  analyzeArray,
  calculator,
  caesarCipher,
} from "../scripts/utility";

// capitalize
describe("capitalize", () => {
  test("convert a single string to a capitalized string", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("Z")).toBe("Z");
  });

  test("throws an error when a non-string is supplied", () => {
    expect(() => capitalize(true)).toThrow("str must be a string");
    expect(() => capitalize(123)).toThrow("str must be a string");
  });

  test("throws an error when no arg, or a space string is supplied", () => {
    expect(() => capitalize()).toThrow("str must be a string");
    expect(() => capitalize(" ")).toThrow("str is required!");
  });

  test("convert the first letter of a string to uppercase", () => {
    expect(capitalize("ahmed")[0]).toBe("A");
    expect(capitalize("Lo")).toBe("Lo");
  });

  test("converts the character of a string to lowercase, except the first", () => {
    expect(capitalize("AHMED")).toBe("Ahmed");
    expect(capitalize("HELLO")).toBe("Hello");
  });

  test("convert a string with space in it", () => {
    expect(capitalize(" ahmed")).toBe("Ahmed");
    expect(capitalize("ahmed ")).toBe("Ahmed");
  });

  test("convert a string that starts with alphanumeric/symbols", () => {
    expect(capitalize("!hi")).toBe("!hi");
    expect(capitalize("#WON!")).toBe("#won!");
    expect(capitalize("123hello")).toBe("123hello");
  });
});

// reverseString
describe("reverseString", () => {
  test("throws an error when no arg, or a space string is supplied", () => {
    expect(() => reverseString()).toThrow("str must be a string");
    expect(() => reverseString(" ")).toThrow("str is required!");
  });

  test("throws an error when a non-string is supplied", () => {
    expect(() => reverseString(true)).toThrow("str must be a string");
    expect(() => reverseString(123)).toThrow("str must be a string");
  });

  test("returns the same character if a single character is provided", () => {
    expect(reverseString("a")).toBe("a");
    expect(reverseString("2")).toBe("2");
  });

  test("returns a string of characters reversed", () => {
    expect(reverseString("baby")).toBe("ybab");
    expect(reverseString("aaa")).toBe("aaa");
    expect(Boolean(JSON.parse(reverseString("eslaf")))).toBeFalsy();
  });

  test("return a string with space reversed", () => {
    expect(reverseString(" ahmed")).toBe("demha ");
    expect(reverseString("ahmed ")).toBe(" demha");
  });

  test("returns a string of reversed numerical string", () => {
    expect(parseInt(reverseString("123"))).toEqual(321);
    expect(reverseString("100")).toBe("001");
  });

  test("returns a string with special characters/symbols reversed", () => {
    expect(reverseString("!hi")).toBe("ih!");
    expect(reverseString("#won")).toBe("now#");
    expect(reverseString("hello 123")).toBe("321 olleh");
  });
});

// analyzeArray
describe("analyzeArray", () => {
  test("should return an object, with some properties", () => {
    const analyzedArray = analyzeArray([0, 1]);
    expect(analyzedArray).toBeInstanceOf(Object);
    expect(analyzedArray).toHaveProperty("average");
    expect(analyzedArray).not.toHaveProperty("mean");
  });

  test("should analyze an array and object with the property average", () => {
    const analyzedArray = analyzeArray([1, 4, 2, 3]);
    expect(analyzedArray.average).toEqual(2.5);
    expect(parseInt(analyzedArray.average)).toEqual(2);
  });

  test("should analyze an array and return its max and min as object properties", () => {
    const analyzedArray = analyzeArray([1, 4, 2, 3]);
    console.log(Math.max(...[1, 4, 2, 3]));
    expect(analyzedArray.min).toEqual(1);
    expect(analyzedArray.max).toEqual(4);
    expect(analyzedArray.max + analyzedArray.min).toEqual(5);
  });

  test("should analyze an array an return an object with the property length", () => {
    const analyzedArray = analyzeArray([1, 4, 2, 3]);
    expect(analyzedArray.length).toEqual(4);
  });

  test("should analyze an object and return 4 properties", () => {
    const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(analyzedArray).toEqual(
      expect.objectContaining({
        average: 4,
        max: 8,
        min: 1,
        length: 6,
      }),
    );
  });
});

// calculator object
describe("calculator", () => {
  test("should take two numbers and return their addition", () => {
    expect(calculator.add(3, 9)).toEqual(12);
    expect(calculator.add(2, 4)).toEqual(6);
    expect(calculator.add(1, 0)).toEqual(1);
    expect(calculator.add(-5, -1)).toEqual(-6);
    expect(calculator.add(-5, 5)).toEqual(0);
    expect(calculator.add(10, -7)).toEqual(3);
  });

  test("should take two numbers and return their difference", () => {
    expect(calculator.subtract(4, 2)).toEqual(2);
    expect(calculator.subtract(1, 0)).toBe(1);
    expect(calculator.subtract(-5, -1)).toBe(-4);
    expect(calculator.subtract(-5, 5)).toEqual(-10);
    expect(calculator.subtract(10, -7)).toEqual(17);
  });

  test("should take two numbers and return their product", () => {
    expect(calculator.multiply(2, 4)).toEqual(8);
    expect(calculator.multiply(1, 0)).toEqual(0);
    expect(calculator.multiply(-5, -1)).toEqual(5);
    expect(calculator.multiply(-5, 5)).toEqual(-25);
    expect(calculator.multiply(10, -7)).toEqual(-70);
  });

  test("should take two numbers and return their division", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
    expect(() => calculator.divide(1, 0)).toThrow("Can't divide by 0");
    expect(calculator.divide(-5, -1)).toBe(5);
    expect(calculator.divide(-5, 5)).toBe(-1);
    expect(Number(parseFloat(calculator.divide(10, -7)).toFixed(2))).toEqual(
      -1.43,
    );
  });
});

// caesarCipher
describe("caesarCipher", () => {
  test("takes a string and a shift factor, and returns it with each character shifted", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("dog", 3)).toBe("grj");
  });

  test("works for characters at the end of the alphabets", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("zar", 1)).toBe("abs");
  });

  test("works for large factors", () => {
    expect(caesarCipher("abc", 10)).toBe("klm");
  });

  test("should preserve the case of the string", () => {
    expect(caesarCipher("heLLo", 3)).toBe("khOOr");
    expect(caesarCipher("aGe", 2)).toBe("cIg");
    console.log(caesarCipher("Hello, World!", 3));
  });

  test("should preserve the punctuation, spaces, and other non-alphabetical characters within the string", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("We want #Freedom", 1)).toBe("Xf xbou #Gsffepn");
  });

  test("should return the exact string if factor is 0", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
  });
});
