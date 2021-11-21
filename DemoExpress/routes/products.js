var express = require('express');
var router = express.Router();
var auth = require('../utilities/auth');
var upload = require('../utilities/upload');
var productController = require('../controller/productController');
var bannerController = require('../controller/bannerController');
var categoryController = require('../controller/categoryController');
var userController = require('../controller/userController');

var middle = [upload.single('imgProduct')]
// router.use(auth.authenticate); // check login for all


///////////////////////////////////////////////////////// product /////////////////////////////////////////////////////////
// /* GET home page. */
router.get("/", async function (req, res, next) {
  let listSP = await productController.getListProducts()
  res.render("products", { listSP }); // This is render view hbs...
});


// >>> Category
// /* GET Category. */
// router.get("/category", function (req, res, next) {
//   res.redirect('/routes/category.js'); // -> ../routes/category.js
// });

///////////////////////////////////////////////////////// Add product /////////////////////////////////////////////////////////
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

////////////////////////////////////////////////// Category ///////////////////////////////////////////////
// Render list category..
router.get("/category", async function(req, res){
  let listCategories = await categoryController.getListCategories();
  res.render("category", { listCategories });
});

// Add new category
router.get("/category/addCategory", function(req, res, next){
  res.render("addCategory");
});

router.post('/category/addCategory', async function(req, res, next){
  let { body } = req
  await categoryController.addNew(body);
  res.redirect('/products/category');
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
router.delete("/category/deleteCategory/:id", async function (req, res, next) {
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

module.exports = router;
