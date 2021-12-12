var categoryServices = require("./categoryServices");
var ProductModel = require("../model/productModel");

exports.getListProducts = async function getListProducts() {
  let products = await ProductModel.find().populate("productId");
  return products;
};

exports.getProductByID = async function getProductByID(id) {
  let product = await ProductModel.findById(id);
  // product = {...product, id: product._id}
  return product;
};

exports.addNew = async function addNew(product_push) {
  try {
    let product = new ProductModel(product_push);
    return await product.save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.edit = async function editProduct(product_edit) {
  try {
    let proEdit = await ProductModel.findById(product_edit.id);
    if (proEdit) {
      proEdit.productName = product_edit.productName;
      proEdit.price = product_edit.price;
      if (product_edit.imgProduct) {
        proEdit.imgProduct = product_edit.imgProduct;
      }
      proEdit.categoryId = product_edit.categoryId;
      proEdit.createdDate = product_edit.createdDate;
      proEdit.createdBy = product_edit.createdBy;
      proEdit.updatedDate = product_edit.updatedDate;
      proEdit.updatedBy = product_edit.updatedBy;
      proEdit.listImage = product_edit.listImage;
      proEdit.rateNumber = product_edit.rateNumber;
      proEdit.soldNumber = product_edit.soldNumber;
      proEdit.saleUpTo = product_edit.saleUpTo;
      proEdit.productDetails = product_edit.productDetails;
      proEdit.productInputType = product_edit.productInputType;
      proEdit.sortedNumber = product_edit.sortedNumber;
      proEdit.favoriteId = product_edit.favoriteId;
      proEdit.flastSaleId = product_edit.flastSaleId;

      await proEdit.save();
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.remove = async function removeProductByID(id) {
  // let prod = await ProductModel.remove({_id: id})
  try {
    let prod = await ProductModel.remove({ _id: id });
    
    return prod;
  } catch (error) {
    console.log(error.message);
  }
};
