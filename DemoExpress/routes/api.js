var express = require("express");
var router = express.Router();
var upload = require('../utilities/upload');
var productController = require('../controller/productController');
var categoryController = require('../controller/categoryController');
var userController = require('../controller/userController');

var middle = [upload.single('imgProduct')]

///////////////////////////////// Product //////////////////////////////////
/* List product */
router.get("/getProducts/list", async function (req, res, next) {
  let listProducts = await productController.getListProducts();
  res.send(listProducts);
});

// Get product with id
router.get("/getProducts/:id", async function (req, res, next) {
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

router.post("/category/addCategory", async function (req, res, next) {
  try {
    let { body } = req;
    await categoryController.addNew(body)
    .then(() => {
      res.send({error: false, status: "success"});
    })
    .catch((error) => console.log(error.message));
    
  } catch (error) {
    console.log("error: " + error.message);
  }
});
//////////////////////////////////////// Banner /////////////////////////////////



///////////////////////////////// User //////////////////////////////////
router.get("/getUser/list", middle, async function (req, res, next) {
  let user = await userController.getAllUser();
  res.send(user);
});




module.exports = router;
