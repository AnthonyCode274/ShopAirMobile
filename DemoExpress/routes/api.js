var express = require("express");
var router = express.Router();
var upload = require('../utilities/upload');
var productController = require('../controller/productController');
var categoryController = require('../controller/categoryController');

var middle = [upload.single('imgProduct')]

///////////////////////////////// Product //////////////////////////////////
/* List product */
router.get("/getProducts/list", async function (req, res, next) {
  let listProducts = await productController.getListProducts();
  res.send(listProducts);
});

// Get product with id
router.get("/getProducts/:id", middle, async function (req, res, next) {
  let id = req.params.id;
  let product = await productController.getProductByID(id);
  res.send(product);
});

///////////////////////////////// Category //////////////////////////////////
// Get list category
router.get("/getCategory/list", middle, async function (req, res, next) {
  let cate = await categoryController.getListCategories();
  res.send(cate);
});
// Get category with id
router.get("/getCategory/:id", async function (req, res, next) {
  let id = req.params.id;
  let cate = await categoryController.getCategoryByID(id);
  res.send(cate);
});

module.exports = router;
