var express = require('express');
var router = express.Router();
var auth = require('../utilities/auth');
var upload = require('../utilities/upload');
var productController = require('../controller/productController');
var bannerController = require('../controller/bannerController');
var categoryController = require('../controller/categoryController');
var userController = require('../controller/userController');

// router.use(auth.authenticate); // check login for all

// Send API product...
router.get("/products-list", async function(req, res){
  let listProducts = await productController.getListProducts();
  res.send(listProducts);
});

// Send API banner...
router.get("/banner-list", async function(req, res){
  let list = await bannerController.getListBanner();
  res.send(list);
});

// Send API Category...
router.get("/category-list", async function(req, res){
  let list = await categoryController.getListCategories();
  res.send(list);
});

// router.get("/banner", async function(req, res){
//   let listBanner = await bannerController.getListBanner();
//   res.send(listBanner);
// });


//////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /* GET home page. */
router.get("/", async function (req, res, next) {
  let listSP = await productController.getListProducts()
  res.render("products", { listSP });
});

var middle = [upload.single('imgProduct')]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Insert product
/* GET add new. */
router.get("/add_new", async function (req, res, next) {
  let loaiSP = await categoryController.getListCategories();
  res.render("add_new", { loaiSP });
});

router.post('/add_new', middle, async function(req, res, next){
  // req.body = {...req.body, imgProduct: 'images/' + req.file.originalname}
  let { body } = req
  if (req.file)
  {
    // let imgUrl = req.file.originalname
    let imgUrl = req.file.originalname
    body = {...body, imgProduct: imgUrl}
  }
  await productController.addNew(body)
  res.redirect('/products')

});// >>> End Insert Product

// >>> Category
router.get("/category", async function(req, res){
  let listCategories = await categoryController.getListCategories();
  res.render("category", { listCategories });
});

router.get("/banner", async function (req, res, next) {
  let listBanner = await bannerController.getListBanner()
  // let listBanner = await categoryController.getListCategories();
  res.render("banner", { listBanner });
});

// Add new category
router.get("/add_category", function(req, res, next){
  res.render("/products/category/add_category");
});

router.post('/add_category', async function(req, res, next){
  let { body } = req.params
  await categoryController.addNew(body);
  res.redirect('category/add_category');
});

router.get("/edit_category/:id", async function (req, res, next) {
  let id = req.params.id;
  let loaiSP = await categoryController.getCategoryByID(id);
  res.render('category/edit_category', {categoriesEdit: loaiSP});
});
/* Submit update product. */
router.post("/edit_category/:id", async function (req, res, next) {
  let { id } = req.params;
  let { body } = req
  await categoryController.edit(id, body)
  res.redirect('/category')
});

/* Delete product. */
router.delete("/deleteCategory/:id", async function (req, res, next) {
  let {id} = req.params
  await categoryController.remove(id)
  res.send({res: true})
});
// << End Category


/* Login. */
router.get('/login', async function (req, res, next) {
  let users = await userController.getAllUser();
  console.log("users >>> ", users);
  res.render("login");
});
/* Get Register. */
router.get("/register", async function(req, res){
  let allUser = await userController.getAllUser()
  console.log("Get All User >>>", allUser)
  res.render("register");
});

router.post('/register', async function(req, res, next){
  let { body } = req
  await userController.addNew(body);
  res.redirect('/products/register');
});

/* Update product. */
router.get("/update/:id", middle, async function (req, res, next) {
  let id = req.params.id;
  let pros = await productController.getProductByID(id);
  let loaiSP = await categoryController.getListCategories();
  res.render('update', {productEdit: pros, loaiSP});
});

// http://localhost:9000/images/
/* Submit update product. */
router.post("/update/:id", middle, async function (req, res, next) {
  let { id } = req.params;
  let { body } = req
  if (req.file)
  {
    let imgUrl = req.file.originalname
    body = {...body, imgProduct: imgUrl}
  }
  await productController.edit(id, body)
  res.redirect('/products')

});

/* Delete product. */
router.delete("/deleteProduct/:id", async function (req, res, next) {
  let id = req.params.id;
  await productController.remove(id);
  console.log("Remove product with id: " + id)
  res.send({res: true});
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Start Banner<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
/* GET add new. */

// >>> Banner
router.get("/banner", async function(req, res){
  let listBanner = await bannerController.getListBanner();
  res.render("banner", { listBanner });
});

router.get("/addNewBanner", async function (req, res, next) {
  let loaiSP = await categoryController.getListCategories();
  res.render("banner/addNewBanner", { loaiSP });
});

router.post('/addNewBanner', middle, async function(req, res, next){
  let { body } = req
  if (req.file)
  {
    // let imgUrl = req.file.originalname
    let imgUrl = req.file.originalname
    body = {...body, imageUrl: imgUrl}
  }
  await bannerController.addNew(body)
  res.redirect('/banner')

});

/* Update Banner. */
router.get("/updateBanner/:id", middle, async function (req, res, next) {
    let id = req.params.id;
    let banner = await bannerController.getBannerByID(id);
    let loaiSP = await categoryController.getListCategories();
    res.render('updateBanner', {bannerEdit: banner, loaiSP});
  });
  
  // http://localhost:9000/images/
  /* Submit update Banner. */
  router.post("/updateBanner/:id", middle, async function (req, res, next) {
    let { id } = req.params;
    let { body } = req
    if (req.file)
    {
      let imgUrl = req.file.originalname
      body = {...body, imgProduct: imgUrl}
    }
    await productController.edit(id, body)
    res.redirect('/banner')
  
  });

/* Delete Banner. */
router.delete("/deleteBanner/:id", async function (req, res, next) {
  let id = req.params.id;
  await bannerController.remove(id);
  console.log("Removed id: " + id)
  res.send({res: true});
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End Banner<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

module.exports = router;
