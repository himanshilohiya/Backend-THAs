// ---- THA ----
var express = require("express");
var router = express.Router();
const User = require("../models/user");
const { redisClient } = require("../database/redis");

// cache middleware
function cache(req, res, next) {
  const id = parseInt(req.params.id);

  redisClient.get(id, (err, data) => {
    if (err) {
      throw err;
    }

    if (data !== null) {
      console.log("Redis Cache Hit...");
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}

// get all Users
router.get("/", async function (req, res, next) {
  const users = await User.findAll();
  res.json(users);
});

// get user with id
router.get("/:id", cache, async function (req, res) {
  try {
    const id = parseInt(req.params.id);
    console.log("Fetching from Postgres");

    const data = await User.findOne({ where: { id } });
    redisClient.set(id, JSON.stringify(data));

    if (data !== null) {
      res.json(data);
    } else {
      res.send("Id does not exists");
    }
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
