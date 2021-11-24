var UserModel = require("../model/userModel");
var ProductModel = require("../model/productModel");

exports.getAllUser = async function getAllUser() {
  let users = await UserModel.find().populate("idSP");
  return users;
};

exports.getUserByID = async function getUserByID(id) {
  let user = await UserModel.findById(id);
  // product = {...product, id: product._id}
  return user;
};

exports.addUser = async function addUser(user_push) {
  try {
    let user = new UserModel(user_push);
    await user.save();
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
      userEdit.phoneNumber = user_edit.phoneNumber;
      userEdit.password = user_edit.password;
      userEdit.location = user_edit.location;
      userEdit.idSP = user_edit.idSP
      userEdit.productState = user_edit.productState
      if (user_edit.avatar) {
        userEdit.avatar = user_edit.avatar;
      }
      await userEdit.save();
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.remove = async function removeUserByID(id) {
  // let prod = await ProductModel.remove({_id: id})
  try {
    let prod = await UserModel.deleteOne({ _id: id });
    return prod;
  } catch (error) {
    console.log(error.message);
  }
};
