var CartModel = require("../model/cartModel");

exports.getListCart = async function getListCart() {
  let findIdSP = await CartModel.find().populate("idSP");
  let findIdUser = await CartModel.find().populate("idUser");
  return findIdSP, findIdUser;
};

exports.getCartByID = async function getCartByID(id) {
  let cart = await CartModel.findById(id);
  return cart;
};

exports.addCart = async function addCart(cart_push) {
  try {
    let cart = new CartModel(cart_push);
    return await cart.save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.edit = async function editCart(cart_edit) {
  try {
    let cart = await CartModel.findById(cart_edit.id);
    if (cart) {
      cart.quantity = cart_edit.quantity;
      cart.idSP = cart_edit.idSP;
      cart.idUser = cart_edit.idUser;
      console.log(cart_edit);
      let cart_save = await cart.save();
      return cart_save
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.remove = async function removeCartByID(id) {
  try {
    let prod = await CartModel.deleteOne({ _id: id });
    return prod;
  } catch (error) {
    console.log(error.message);
  }
};

