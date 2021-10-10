const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with DB");
  } catch (err) {
    console.log("Unable to connect with DB");
  }
})();

module.exports = sequelize;
