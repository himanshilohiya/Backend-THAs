const { emailValidate, passwordValidate } = require("../utils/validate");

const registerInitialCheck = (req, res, next) => {
  const { email, password } = req.body;

  if (
    typeof (email != "string") &&
    typeof (password != "string") &&
    email.length > 10 &&
    password.length > 8 &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).json({ message: "Initial Checks Failed" });
  }
};

module.exports = registerInitialCheck;
