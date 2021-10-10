const express = require("express");
const router = express.Router();

// middlewares and controllers
const userAuth = require("../middlewares/userAuth");

router.get("/", userAuth, (req, res) => {
  res.status(200).json({ message: "Welcome to dashboard" });
});

module.exports = router;
