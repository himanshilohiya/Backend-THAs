var express = require("express");
var router = express.Router();
var path = require("path");

let rootDIR = process.cwd();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/image", (req, res) => {
  res.sendFile(path.join(rootDIR, "/public/images/image.png"));
});

router.get("/js", (req, res) => {
  res.sendFile(path.join(rootDIR, "/public/javascripts/hello.js"));
});

router.get("/text", (req, res) => {
  res.sendFile(path.join(rootDIR, "/public/data/hello.txt"));
});

router.get("/json", (req, res) => {
  res.sendFile(path.join(rootDIR, "/public/data/hello.json"));
});

router.get("/css", (req, res) => {
  res.sendFile(path.join(rootDIR, "/public/stylesheets/style.css"));
});

// removed it cuz it was of 18mb 🤧
router.get("/video", (req, res) => {
  res.sendFile(path.join(rootDIR, "/public/videos/video.mp4"));
});

module.exports = router;
