const express = require("express");
const app = express();
const PORT = 5000;

const checkAdmin = (req, res, next) => {
  console.log("first");
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(400).send("should be admin");
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", checkAdmin, (req, res) => {
  res.status(200).send("Hello Admin");
});

app.post("/", (req, res) => {
  console.log("req.body => ", req.body);
  res.json({ text: req.body });
});

app.listen(PORT);
