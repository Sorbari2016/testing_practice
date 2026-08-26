// SETUP & CLEANUP

// These are utility functions that we use within tests, they are usually called before and after tests
// They are: beforeEach, beforeAll, afterEach, and afterAll

// beforeEach() runs before every test.
let user;

beforeEach(function () {
  user = {
    name: "Clematins",
    age: 25,
  };
});

test("user has a name", function () {
  expect(user.name).toBe("Clematins");
});

test("user has an age", function () {
  expect(user.age).toBe(25);
});

// afterEach() does the opposite.

afterEach(function () {
  jest.clearAllMocks();
});

// beforeAll() runs only once, before all the tests in that test file.

// afterAll() runs once after all tests have finished.

// describe() + setup
describe("Shopping cart", function () {
  let cart;

  beforeEach(function () {
    cart = [];
  });

  test("starts empty", function () {
    expect(cart).toEqual([]);
  });

  test("can add an item", function () {
    cart.push("Laptop");

    expect(cart).toContain("Laptop");
  });

  test("can add multiple items", function () {
    cart.push("Laptop");
    cart.push("Mouse");

    expect(cart).toHaveLength(2);
  });
});

// Setup can be specific to a describe
describe("User tests", function () {
  let user;

  beforeEach(function () {
    user = {
      name: "Clematins",
      age: 25,
    };
  });

  test("has a name", function () {
    expect(user.name).toBe("Clematins");
  });
});

// Nested describe + setup
describe("User", function () {
  beforeEach(function () {
    console.log("User setup");
  });

  describe("authentication", function () {
    beforeEach(function () {
      console.log("Authentication setup");
    });

    test("user can log in", function () {
      // test
    });
  });
});
