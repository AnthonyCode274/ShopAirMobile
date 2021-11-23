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

exports.edit = async function editProduct(product_edit) {
  try {
    let proEdit = await UserModel.findById(product_edit.id);
    if (proEdit) {
      proEdit.productName = product_edit.productName;
      proEdit.price = product_edit.price;
      proEdit.date = product_edit.date;
      proEdit.saleUpTo = product_edit.saleUpTo;
      proEdit.detailsProduct = product_edit.detailsProduct;
      proEdit.idLoaiSP = product_edit.idLoaiSP;

      if (product_edit.imgProduct) {
        proEdit.imgProduct = product_edit.imgProduct;
      }
      await proEdit.save();
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
