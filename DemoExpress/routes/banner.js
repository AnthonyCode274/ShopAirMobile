var bannerController = require("../controller/bannerController");
var categoryController = require("../controller/categoryController");


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