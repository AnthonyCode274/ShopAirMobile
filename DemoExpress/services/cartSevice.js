var CartModel = require("../model/cartModel");

exports.getListCart = async function getListCart() {
  return await CartModel.find();
};

exports.getCartByID = async function getCartByID(id) {
  let cart = await CartModel.findById(id);
  return cart;
};

exports.addCart = async function addCart(cart_push) {
  try {
    let cart = new CartModel(cart_push);
    await cart.save();
  } catch (error) {
    console.log("addCart Service" + error.message);
  }
};

exports.edit = async function editCart(cart_edit) {
  try {
    let cart = await CartModel.findById(cart_edit.id);
    if (cart) {
      cart.quantity = cart_edit.quantity;
      cart.idSP = cart_edit.idSP;
      cart.isUser = cart_edit.isUser;
      console.log(cart_edit);
      await cart.save();
    }
  } catch (error) {
    console.log("cart Service" + error.message);
  }
};

exports.remove = async function removeCartByID(id) {
  await CartModel.remove({ _id: id });
};
