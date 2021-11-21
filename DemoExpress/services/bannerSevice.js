var BannerModel = require("../model/bannerModel");

exports.getListBanner = async function getListBanner() {
  return await BannerModel.find();
};

exports.getBannerByID = async function getBannerByID(id) {
  let banner = await BannerModel.findById(id);
  return banner;
};

exports.addNew = async function addNew(banner_push) {
  try {
    let banner = new BannerModel(banner_push);
    await banner.save();
  } catch (error) {
    console.log("addNew Service" + error.message);
  }
};

exports.edit = async function editBanner(banner_edit) {
  try {
    let banner = await BannerModel.findById(banner_edit.id);
    if (banner) {
      banner.bannerName = banner_edit.bannerName;
      banner.idLoaiSP = banner_edit.idLoaiSP;
      banner.createdDate = banner_edit.createdDate;
      if (banner_edit.imageUrl) {
        banner.imageUrl = banner_edit.imageUrl;
      }
      console.log(banner_edit);
      await banner.save();
    }
  } catch (error) {
    console.log("edit Service" + error.message);
  }
};

exports.remove = async function removeBannerByID(id) {
  await BannerModel.remove({ _id: id });
};
