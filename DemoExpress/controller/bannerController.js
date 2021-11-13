var bannerService = require("../services/bannerSevice");

exports.getListBanner = async function getListBanner() {
  return await bannerService.getListBanner();
};

exports.getBannerByID = async function getBannerByID(id) {
  return await bannerService.getBannerByID(id);
};

exports.addNew = async function addNew(params) {
  let { bannerName, createdDate, idLoaiSP, imageUrl } = params;
  let products = {
    bannerName: bannerName,
    createdDate: createdDate,
    idLoaiSP: idLoaiSP,
    imageUrl: imageUrl,
  };
  await bannerService.addNew(products);
};

exports.edit = async function editBanner(id, params) {
  let { bannerName, createdDate, idLoaiSP, imageUrl } = params;
  let product_edit = { bannerName, createdDate, idLoaiSP, imageUrl };
  await bannerService.edit(product_edit);
};

exports.remove = async function removeProductByID(id) {
  await bannerService.remove(id);
};
