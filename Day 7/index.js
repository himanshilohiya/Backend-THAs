const express = require("express");
const app = express();
const PORT = 5000;

const slash = (req, res) => {
  res.send("Hemlo World!");
};

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/products", (req, res) => {
  res.status(200).send(req.query);
});

app.get("/user/:userId/books/:booksId", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post("/", slash);
app.put("/", slash);
app.delete("/", slash);

app.listen(PORT);