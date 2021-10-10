const express = require("express");
const router = express.Router();

// middlewares and controllers
const checkRole = require("../middlewares/checkRole");
const checkUserExists = require("../middlewares/checkUserExists");
const checkPassword = require("../middlewares/checkPassword");
const login = require("../controllers/login");

router.post("/", checkUserExists, checkPassword, login);

router.post(
  "/admin",
  checkUserExists,
  async (req, res, next) => await checkRole(req, "admin", res, next),
  checkPassword,
  login
);

router.post(
  "/superAdmin",
  checkUserExists,
  async (req, res, next) => await checkRole(req, "superAdmin", res, next),
  checkPassword,
  login
);

module.exports = router;
