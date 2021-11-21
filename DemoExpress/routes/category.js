var express = require('express');
var router = express.Router();
var auth = require('../utilities/auth');
var productController = require('../controller/productController');
var bannerController = require('../controller/bannerController');
var categoryController = require('../controller/categoryController');
var userController = require('../controller/userController');

// router.use(auth.authenticate); // check login for all

// >>> Category
// router.get("/products/category", async function(req, res){
//   let listCategories = await categoryController.getListCategories();
//   res.render("category", { listCategories }); // This is render view hbs...
// });

// // Add new category
// router.get("/products/category/add_category", function(req, res, next){
//   res.render("add_category");
// });

// router.post('/add_category', async function(req, res, next){
//   let { body } = req.params
//   await categoryController.addNew(body);
//   res.redirect('category/add_category');
// });

// router.get("/edit_category/:id", async function (req, res, next) {
//   let id = req.params.id;
//   let loaiSP = await categoryController.getCategoryByID(id);
//   res.render('category/edit_category', {categoriesEdit: loaiSP});
// });
// /* Submit update product. */
// router.post("/edit_category/:id", async function (req, res, next) {
//   let { id } = req.params;
//   let { body } = req
//   await categoryController.edit(id, body)
//   res.redirect('/category')
// });

// /* Delete product. */
// router.delete("/deleteCategory/:id", async function (req, res, next) {
//   let {id} = req.params
//   await categoryController.remove(id)
//   res.send({res: true})
// });
// << End Category

module.exports = router;
