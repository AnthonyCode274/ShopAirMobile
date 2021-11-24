var bannerService = require("../services/bannerSevice");

exports.getListBanner = async function getListBanner() {
  return await bannerService.getListBanner();
};

exports.getBannerByID = async function getBannerByID(id) {
  return await bannerService.getBannerByID(id);
};

exports.addNew = async function addNew(params) {
  let { bannerName, idLoaiSP, imageUrl, createdDate } = params;
  let banner = {
    bannerName: bannerName,
    createdDate: createdDate,
    idLoaiSP: idLoaiSP,
    imageUrl: imageUrl,
  };
  return await bannerService.addNew(banner);
};

exports.edit = async function editBanner(id, params) {
  let { bannerName, idLoaiSP, imageUrl, createdDate } = params;
  let banner_edit = {id, bannerName, idLoaiSP, imageUrl, createdDate };
  await bannerService.edit(banner_edit);
};

exports.remove = async function removeBannerByID(id) {
  await bannerService.remove(id);
};
