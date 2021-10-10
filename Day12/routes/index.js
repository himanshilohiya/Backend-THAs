var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "Kirua";
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  console.log("Redis value: ", req.session.username);
  res.render("index", { title: "Express" });
});

/*
 **
 * @requires {email, firstName, lastName, password, confirmPassword} - req.body
 * @description
 * Security, Performace, Edge cases
 * ------------------------------------------------
 ** level - 1
 * Email validate - string
 * Password validate
 * password == confirm
 * ------------------------------------------------
 ** level - 2
 * JS/SQL - THA
 * ------------------------------------------------
 ** level - 3
 * check if email already exists
 * password hash
 * email lowercase
 * ------------------------------------------------
 * save
 **
 */

router.post("/register", registerInitialCheck, register);

module.exports = router;
