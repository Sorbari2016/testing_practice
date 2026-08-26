const math = require("../scripts/math.js");
const arrays = require("../scripts/array.js");
const bool = require("../scripts/bool.js");
const motive = require("../scripts/motive.js");

test("adds 2 + 3", () => {
  expect(math.add(2, 3)).toBe(5);
});

test("adds 5 + 6", () => {
  expect(math.add(5, 6)).toBe(11);
});

// Using describe to group tests
describe("add()", () => {
  test("adds positive numbers", () => {
    expect(math.add(4, 4)).toBe(8);
  });

  test("adds negative numbers", () => {
    expect(math.add(-2, -3)).toBe(-5);
  });

  test("adds zero", () => {
    expect(math.add(5, 0)).toBe(5);
  });
});

describe("multiply()", () => {
  test("multiply positive numbes", () => {
    expect(math.multiply(2, 3)).toBe(6);
  });

  test("multiply zero", () => {
    expect(math.multiply(4, 0)).toBe(0);
  });

  test("multiple a positive by a negative number", () => {
    expect(math.multiply(-5, 5)).toBe(-25);
  });

  test("multiply negative numbers", () => {
    expect(math.multiply(-4, -6)).toBe(24);
  });
});

describe("reverseArray()", () => {
  test("reverse the position of two numbers", () => {
    expect(arrays.reverseArray([1, 2])).toEqual([2, 1]);
  });

  test("check if array returned have particular length", () => {
    expect(arrays.reverseArray([4, 5, 3])).toHaveLength(3);
  });
});

test("check if word in sentence", () => {
  expect(motive.giveHope()).toContain("smile");
});

test("check if result is greater number", () => {
  expect(arrays.findLargest([8, 3, 20])).toBeGreaterThan(10);
});

describe("checkTruthy", () => {
  test("return true", () => {
    expect(bool.checkTruthy(1)).toBeTruthy();
  });

  test("return true from math operation of two numbers", () => {
    expect(bool.checkTruthy(1 + 4)).toBeTruthy();
  });

  test("return true from space string string", () => {
    expect(bool.checkTruthy(" ")).toBeTruthy();
  });

  test("return true from a string", () => {
    expect(bool.checkTruthy("I am string")).toBeTruthy();
  });

  test("return true from the word true", () => {
    expect(bool.checkTruthy(true)).toBeTruthy();
  });

  test("return true from a negative number", () => {
    expect(bool.checkTruthy(-5)).toBeTruthy();
  });
});

describe("checkFalsy", () => {
  test("return false", () => {
    expect(bool.checkFalsy(0)).toBeFalsy();
  });

  test("return false from math operation of two numbers", () => {
    expect(bool.checkFalsy(1 - 1)).toBeFalsy();
  });

  test("return false from an empty string", () => {
    expect(bool.checkFalsy("")).toBeFalsy();
  });

  test("return false from undefined", () => {
    expect(bool.checkFalsy(undefined)).toBeFalsy();
  });

  test("return false from null", () => {
    expect(bool.checkFalsy(null)).toBeFalsy();
  });

  test("return false from NaN", () => {
    expect(bool.checkFalsy(NaN)).toBeFalsy();
  });

  test("return false from negative  zero", () => {
    expect(bool.checkFalsy(-0)).toBeFalsy();
  });

  test("return false from BigInt zero", () => {
    expect(bool.checkFalsy(0n)).toBeFalsy();
  });

  test("return false from the value false", () => {
    expect(bool.checkFalsy(false)).toBeFalsy();
  });
});
