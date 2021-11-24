var cartService = require("../services/cartService");

exports.getListCart = async function getListCart() {
  return await cartService.getListCart();
};

exports.getCartByID = async function getCartByID(id) {
  return await cartService.getCartByID(id);
};

exports.addCart = async function addCart(params) {
  let {quantity, idSP, idUser} = params
  let cart = {
    quantity: quantity,
    idSP: idSP,
    idUser: idUser,
  };
  return await cartService.addCart(cart);
}

exports.edit = async function editCart(id, params) {
  let { quantity, idSP, idUser } = params;
  let cart_edit = { id, quantity, idSP, idUser };
  let cart = await cartService.edit(cart_edit);
  return cart
};

exports.remove = async function removeCartByID(id) {
  let removeCart = await cartService.remove(id);
  return removeCart;
};
