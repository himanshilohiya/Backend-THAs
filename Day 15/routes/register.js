const express = require("express");
const router = express.Router();

// middlewares and controllers
const registerInitialCheck = require("../middlewares/registerInitialCheck");
const register = require("../controllers/register");

router.post("/", registerInitialCheck, async (req, res) => {
  await register(req, "user", res);
});

router.post("/admin", registerInitialCheck, async (req, res) => {
  await register(req, "admin", res);
});

router.post("/superAdmin", registerInitialCheck, async (req, res) => {
  await register(req, "superAdmin", res);
});

module.exports = router;
