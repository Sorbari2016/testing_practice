const { addItem, removeItem } = require("../scripts/shopping-cart.js");

describe("Shopping Cart", function () {
  let cart;

  beforeEach(function () {
    cart = [];
  });

  test("starts empty", function () {
    expect(cart).toEqual([]);
  });

  test("can add an item", function () {
    addItem(cart, "Laptop");

    expect(cart).toContain("Laptop");
  });

  test("can remove an item", function () {
    addItem(cart, "Laptop");
    removeItem(cart, "Laptop");

    expect(cart).not.toContain("Laptop");
  });
});
