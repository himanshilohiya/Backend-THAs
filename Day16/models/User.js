const sequelize = require("../database/index");
const Sequelize = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    // user - admin - superAdmin
    type: Sequelize.STRING,
    defaultValue: "user",
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    min: 8,
    allowNull: false,
  },
});

module.exports = User;
