const bcrypt = require("bcrypt");
const User = require("../models/User");

const checkPassword = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  const hashedPass = user.dataValues.password;
  const isPasswordCorrect = await bcrypt.compare(password, hashedPass);
  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  next();
};

module.exports = checkPassword;
