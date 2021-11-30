var express = require("express");
var router = express.Router();
var auth = require("../utilities/auth");
var upload = require("../utilities/upload");
var productController = require("../controller/productController");
var bannerController = require("../controller/bannerController");
var cartController = require("../controller/cartController");
var categoryController = require("../controller/categoryController");
var userController = require("../controller/userController");
var pathImage = require("../utilities/path");

var middle = [upload.single("imgProduct")];
// router.use(auth.authenticate); // check login for all

///////////////////////////////////////////////////////// START PRODUCT /////////////////////////////////////////////////////////
// /* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    let listSP = await productController.getListProducts();
    res.render("products", { listSP }); // This is render view hbs...
  } catch (error) {
    console.log("error: " + error.message); // This is render view hbs...
  }
});

/* GET add new. */
router.get("/add_new", async function (req, res, next) {
  try {
    let loaiSP = await categoryController.getListCategories();
    res.render("add_new", { loaiSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.post("/add_new", middle, async function (req, res, next) {
  // req.body = {...req.body, imgProduct: 'images/' + req.file.originalname}

  try {
    let { body } = req;
    if (req.file) {
      // let imgUrl = req.file.originalname
      let imgUrl = req.file.originalname;
      body = { ...body, imgProduct: imgUrl };
    }
    console.log("body: " , body);
    await productController.addNew(body);
  } catch (error) {
    console.log("error: " + error.message);
  }
  res.redirect("/products");
}); // >>> End Insert Product

/* Update product. */
router.get("/update/:id", middle, async function (req, res, next) {
  try {
    let id = req.params.id;
    let pros = await productController.getProductByID(id);
    let loaiSP = await categoryController.getListCategories();
    res.render("update", { productEdit: pros, loaiSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// http://localhost:9000/images/
/* Submit update product. */
router.post("/update/:id", middle, async function (req, res, next) {
  try {
    let { id } = req.params;
    let { body } = req;
    if (req.file) {
      let imgUrl = req.file.originalname;
      body = { ...body, imgProduct: imgUrl };
    }
    console.log(body);
    await productController.edit(id, body);
  } catch (error) {
    console.log("error: " + error.message);
  }
  res.redirect("/products");
});

/* Delete product. */
router.delete("/deleteProduct/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    await productController.remove(id);
    console.log("Remove product with id: " + id);
    res.send({ res: true });
  } catch (error) {
    console.log("error: " + error.message);
  }
});
///////////////////////////////////////////////////////// END PRODUCT /////////////////////////////////////////////////////////

////////////////////////////////////////////////// START CATEGORY ////////////////////////////////////////////////////////////
// Render list category..
router.get("/category", async function (req, res) {
  try {
    let listCategories = await categoryController.getListCategories();
    res.render("category", { listCategories });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// Add new category
router.get("/category/addCategory", function (req, res, next) {
  try {
    res.render("addCategory");
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.post("/category/addCategory", async function (req, res, next) {
  try {
    let { body } = req;
    await categoryController.addNew(body);
    res.redirect("/products/category");
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.get("/category/editCategory/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let loaiSP = await categoryController.getCategoryByID(id);
    res.render("editCategory", { categoriesEdit: loaiSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});
/* Submit update product. */
router.post("/category/editCategory/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let { body } = req;
    return await categoryController.edit(id, body);
  } catch (error) {
    console.log("error: " + error.message);
  }
  res.redirect("/products/category");
});

/* Delete product. */
router.delete("/category/deleteCategory/:id", async function (req, res, next) {
  try {
    let { id } = req.params;
    return await categoryController.remove(id);
    res.send({ res: true });
  } catch (error) {
    console.log("error: " + error.message);
  }
});
// << End Category
////////////////////////////////////////////////// END CATEGORY ////////////////////////////////////////////////////////////

////////////////////////////////////////////////// START BANNER ////////////////////////////////////////////////////////////
var middleBanner = [upload.single("imageUrl")];
router.get("/banner", async function (req, res) {
  try {
    let listBanner = await bannerController.getListBanner();
    res.render("banner", { listBanner });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// Add new
router.get("/banner/addBanner", async function (req, res, next) {
  try {
    let loaiSP = await categoryController.getListCategories();
    res.render("addBanner", { loaiSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.post("/banner/addBanner", middleBanner, async function (req, res, next) {
  try {
    let { body } = req;
    if (req.file) {
      // let imgUrl = req.file.originalname
      let imageUrl = req.file.originalname;
      body = { ...body, imageUrl: imageUrl };
    }
    await bannerController.addNew(body);
    res.redirect("/products/banner");
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.get("/banner/editBanner/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let loaiSP = await categoryController.getListCategories();
    let banner = await bannerController.getBannerByID(id);
    res.render("editBanner", { bannerEdit: banner, loaiSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.post(
  "/banner/editBanner/:id",
  middleBanner,
  async function (req, res, next) {
    try {
      let id = req.params.id;
      let { body } = req;
      if (req.file) {
        // let imgUrl = req.file.originalname
        let imageUrl = req.file.originalname;
        body = { ...body, imageUrl: imageUrl };
      }
      console.log(body);
      await bannerController.edit(id, body);
    } catch (error) {
      console.log("error: " + error.message);
    }
    res.redirect("/products/banner");
  }
);

/* Delete product. */
router.delete("/banner/deleteBanner/:id", async function (req, res, next) {
  try {
    let { id } = req.params;
    await bannerController.remove(id);
    res.send({ res: true });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

////////////////////////////////////////////////// END BANNER ////////////////////////////////////////////////////////////
/* Login. */
////////////////////////////////////////////////// START USER ////////////////////////////////////////////////////////////
// Render list category..
var middleUser = [upload.single("avatar")];
router.get("/user", async function (req, res) {
  try {
    let listUser = await userController.getAllUser();
    res.render("user", { listUser });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// Add new category
router.get("/user/addUser", async function (req, res, next) {
  try {
    let listSP = await productController.getListProducts();
    
    res.render("addUser", { listSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

router.post("/user/addUser", middleUser, async function (req, res, next) {
  try {
    let { body } = req;
    if (req.file) {
      // let imgUrl = req.file.originalname
      let imageUrl = req.file.originalname;
      body = { ...body, avatar: imageUrl };
    }
    console.log(body);
    await userController.addUser(body);
    
  } catch (error) {
    console.log("error: " + error.message);
  }
  res.redirect("/products/user");
});

router.get("/user/editUser/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let user = await userController.getUserByID(id);
    let listSP = await productController.getListProducts();
    res.render("editUser", { userEdit: user, listSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
});
/* Submit update product. */
router.post("/user/editUser/:id", middleUser, async function (req, res, next) {
  try {
    let id = req.params.id;
    let { body } = req;
    if (req.file) {
      let imageUrl = req.file.originalname;
      body = { ...body, avatar: imageUrl };
    }
    console.log(body);
    await userController.editUser(id, body);
  } catch (error) {
    console.log("error: " + error.message);
  }
  res.redirect("/products/user");
});

/* Delete product. */
router.delete("/user/deleteUser/:id", async function (req, res, next) {
  try {
    let { id } = req.params;
    await userController.remove(id);
    res.send({ res: true });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

////////////////////////////////////////////////// END USER ////////////////////////////////////////////////////////////

////////////////////////////////////////////////// START CART ////////////////////////////////////////////////////////////
router.get("/cart", async function (req, res) {
  try {
    let listCart = await cartController.getListCart();
    res.render("cart", { listCart });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

// Add new
router.get("/cart/addCart", async function (req, res, next) {
  try {
    let listUser = await userController.getAllUser();
    let listSP = await productController.getListProducts();
    res.render("addCart", { listUser, listSP });
  } catch (error) {
    console.log("error: " + error.message);
  }
  
});

router.post("/cart/addCart", async function (req, res, next) {
  try {
    let { body } = req;
    console.log("Body response: ", body);
    await cartController.addCart(body);
  } catch (error) {
    console.log("Error: " + error.message);
  }
  res.redirect("/products/cart");
});

router.get("/cart/editCart/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let listCart = await cartController.getCartByID(id);
    let listUser = await userController.getAllUser();
    let listProduct = await productController.getListProducts();
    console.log(listCart)
    res.render("editCart", { cart: listCart, listUser, listProduct });
  } catch (error) {
    console.log("error: " + error.message);
    res.redirect("/products/cart");
  }
});

router.post("/cart/editCart/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    let { body } = req;
    await cartController.edit(id, body);
  } catch (error) {
    console.log("error: " + error.message);
  }
  res.redirect("/products/cart");
});

/* Delete product. */
router.delete("/cart/deleteCart/:id", async function (req, res, next) {
  try {
    let id = req.params.id;
    await cartController.remove(id);
    res.send({ error: false, status: "success" });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

////////////////////////////////////////////////// END CART ////////////////////////////////////////////////////////////
router.get("/login", async function (req, res, next) {
  let users = await userController.getAllUser();
  console.log("users >>> ", users);
  res.render("login");
});
/* Get Register. */
router.get("/register", async function (req, res) {
  let allUser = await userController.getAllUser();
  console.log("Get All User >>>", allUser);
  res.render("register");
});

router.post("/register", async function (req, res, next) {
  let { body } = req;
  await userController.addUser(body);
  res.redirect("/products/register");
});

module.exports = router;
