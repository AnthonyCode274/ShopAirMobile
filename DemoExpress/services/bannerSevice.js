var categoryServices = require('./categoryServices');
var BannerModel = require("../model/banner");

exports.getListBanner = async function getListBanner(){
  return await BannerModel.find().populate('idLoaiSP')
}

exports.getBannerByID = async function getBannerByID(id){
    let product = await BannerModel.findById(id)
    // product = {...product, id: product._id}
    return product
}


exports.addNew = async function addNew(product_push) {
    let product = new BannerModel(product_push);
    await product.save();
}

exports.edit = async function editBanner(product_edit){
  let proEdit = await BannerModel.findById(product_edit.id);
  if (proEdit){
    proEdit.bannerName = product_edit.bannerName
    proEdit.createdDate = product_edit.createdDate
    proEdit.imageUrl = product_edit.imageUrl
    proEdit.idLoaiSP = product_edit.idLoaiSP

    if (product_edit.imageUrl)
    {
      proEdit.imageUrl = product_edit.imageUrl
    }
    await proEdit.save();
  }
}

exports.remove = async function removeBannerByID(id){
  let prod = await BannerModel.remove({_id: id})
  return await prod;
};


