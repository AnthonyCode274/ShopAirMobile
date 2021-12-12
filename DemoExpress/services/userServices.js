var UserModel = require("../model/userModel");
var ProductModel = require("../model/productModel");

exports.getAllUser = async function getAllUser() {
  let users = await UserModel.find().populate("userId");
  return users;
};

exports.getUserByID = async function getUserByID(id) {
  let user = await UserModel.findById(id);
  return user;
};

exports.addUser = async function addUser(user_push) {
  try {
    let user = new UserModel(user_push);
    return await user.save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.edit = async function editProduct(user_edit) {
  try {
    let userEdit = await UserModel.findById(user_edit.id);
    if (userEdit) {
      userEdit.username = user_edit.username;
      userEdit.email = user_edit.email;
      userEdit.phone = user_edit.phone;
      userEdit.password = user_edit.password;
      userEdit.address = user_edit.address;
      if (user_edit.avatar) {
        userEdit.avatar = user_edit.avatar;
      }
      return await userEdit.save();
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.remove = async function removeUserByID(id) {
  // let prod = await ProductModel.remove({_id: id})
  try {
    let prod = await UserModel.remove({ _id: id });
    return prod;
  } catch (error) {
    console.log(error.message);
  }
};
