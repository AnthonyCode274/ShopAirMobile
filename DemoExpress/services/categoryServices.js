var CategoryModel = require('../model/categoryModel');

exports.getListCategories = async function getListCategories() {
  return await CategoryModel.find()
}

exports.getCategoryByID = async function getCategoryByID(id) {
  let category = await CategoryModel.findById(id)
  return category
}

exports.addNew = async function addNew(category_push) {
  let categories = new CategoryModel(category_push);
  return await categories.save();
}

exports.edit = async function editCategory(category_edit) {
  let categoryEdit = await CategoryModel.findById(category_edit.id);
  if (categoryEdit) {
    categoryEdit.categoryName = category_edit.categoryName
    categoryEdit.image = category_edit.image

    return await categoryEdit.save();
  }
}


exports.remove = async function removeCategoryByID(id) {
  return await CategoryModel.remove({ _id: id });
}
