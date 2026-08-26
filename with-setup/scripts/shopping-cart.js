const addItem = (cart, item) => {
  cart.push(item);

  return cart;
};

const removeItem = (cart, item) => {
  const index = cart.indexOf(item);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  return cart;
};

module.exports = {
  addItem,
  removeItem,
};
