// imports
import { capitalize, reverseString } from "../scripts/utility";

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
