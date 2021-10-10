const express = require("express");
const router = express.Router();

const Product = require("../models/Products");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after);

    let sql = {};

    if (after) {
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }

    const products = await Product.findAll({
      ...sql,
      attributes: ["id", "title", "price", "description", "image"],
      limit: count,
    });

    res.status(200).json({
      count: products.length,
      items: products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Cannot process your request!" });
  }
});

module.exports = router;
