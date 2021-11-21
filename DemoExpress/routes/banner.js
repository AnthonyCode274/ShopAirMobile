var express = require('express');
var router = express.Router();
var auth = require('../utilities/auth');
var upload = require('../utilities/upload');
var bannerController = require('../controller/bannerController');

//////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /* GET home page. */
router.get("/products/banners", async function (req, res, next) {
  let listSP = await bannerController.getListBanner()
  res.render("banners", { listSP });
});
