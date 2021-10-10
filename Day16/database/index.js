const Sequielize = require("sequelize");

const sequielize = new Sequielize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequielize;
