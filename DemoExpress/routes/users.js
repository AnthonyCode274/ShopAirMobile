var express = require('express');
var router = express.Router();
var userController = require("../controller/userController");

/* GET users listing. */
router.get("/user", async function (req, res) {
  try {
    let listUser = await userController.getAllUser();
    res.render("user", { listUser });
  } catch (error) {
    console.log("error: " + error.message);
  }
});

module.exports = router;
