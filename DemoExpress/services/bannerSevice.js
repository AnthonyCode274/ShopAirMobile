var BannerModel = require("../model/bannerModel");

exports.getListBanner = async function getListBanner() {
  return await BannerModel.find();
};

exports.getBannerByID = async function getBannerByID(id) {
  return await BannerModel.findById(id);
};

exports.addNew = async function addNew(banner_push) {
  try {
    let banner = new BannerModel(banner_push);
    return await banner.save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.edit = async function editBanner(banner_edit) {
  try {
    let banner = await BannerModel.findById(banner_edit.id);
    if (banner) {
      banner.bannerName = banner_edit.bannerName;
      if (banner_edit.bannerImage) {
        banner.bannerImage = banner_edit.bannerImage;
      }
      banner.productId = banner_edit.productId;
      banner.sortedNumber = banner_edit.sortedNumber;
      banner.bannerDetails = banner_edit.bannerDetails;
      banner.productGroupId = banner_edit.productGroupId;
      banner.bannerList = banner_edit.bannerList;
      banner.productInputType = banner_edit.productInputType;
      
      return await banner.save();
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.remove = async function removeBannerByID(id) {
  return await BannerModel.remove({ _id: id });
};
