var cartService = require("../services/cartSevice");

exports.getListCart = async function getListCart() {
  return await cartService.getListCart();
};

exports.getCartByID = async function getCartByID(id) {
  return await cartService.getCartByID(id);
};

exports.addCart = async function addCart(params) {
  let { quantity, idSP, isUser } = params;
  let cart = {
    quantity: quantity,
    idSP: idSP,
    isUser: isUser
  };
  await cartService.addCart(cart);
};

exports.edit = async function editCart(id, params) {
  let { quantity } = params;
  let cart_edit = { id , quantity };
  await cartService.edit(cart_edit);
};

exports.remove = async function removeCartByID(id) {
  await cartService.remove(id);
};
