var express = require("express");
var router = express.Router();
var upload = require("../utilities/upload");
var productController = require("../controller/productController");
var categoryController = require("../controller/categoryController");
var userController = require("../controller/userController");
var cartController = require("../controller/cartController");
var bannerController = require("../controller/bannerController");

var middle = [upload.single("imgProduct")];

///////////////////////////////// Product //////////////////////////////////
/* List product */
router.get("/products/list", async function (req, res, next) {
  let listProducts = await productController.getListProducts();
  res.send(listProducts);
});

// Get product with id
router.get("/products/details/:id", async function (req, res, next) {
  let id = req.params.id;
  let product = await productController.getProductByID(id);
  res.send(product);
});

///////////////////////////////// Banner //////////////////////////////////
/* List product */
router.get("/banner/list", async function (req, res, next) {
  let listBanner = await bannerController.getListBanner();
  res.send(listBanner);
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
    await categoryController
      .addNew(body)
      .then(() => {
        res.send({ error: false, status: "success" });
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log("error: " + error.message);
  }
});
//////////////////////////////////////// Banner /////////////////////////////////

///////////////////////////////////////// User /////////////////////////////////
router.get("/getUser/list", middle, async function (req, res, next) {
  let user = await userController.getAllUser();
  res.send(user);
});

///////////////////////////////////////// Cart /////////////////////////////////
// Get cart..
router.get("/cart/list", async function (req, res, next) {
  let listCart = await cartController.getListCart();
  res.send(listCart);
});

// Add cart..
router.post("/cart/addCart", async function (req, res, next) {
  try {
    let { body } = req;
    await cartController
      .addCart(body)
      .then(() => {
        console.log(body);
        res.send({ error: false, status: "success" });
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// Edit cart..
router.post("/cart/editCart/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let { body } = req;
    await cartController
      .edit(id, body)
      .then(async () => {
        // Response cart after edit..
        let getCart = await cartController.getCartByID(id);
        res.send({ error: false, status: "success", cart: getCart });
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// Delete..
router.delete("/cart/deleteCart/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    await cartController
      .remove(id)
      .then(() => {
        res.send({ error: false, status: "success" });
      })
      .catch((error) => {
        res.send({ error: error.message, status: "failed" });
      });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

module.exports = router;
