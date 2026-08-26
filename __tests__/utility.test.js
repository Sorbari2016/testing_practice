// imports
import { capitalize } from "../scripts/utility";

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
