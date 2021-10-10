const User = require("../models/User");

const checkRole = async (req, role, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (role !== user.dataValues.role) {
    return res
      .status(401)
      .json({ message: "You don't have permission to access this route" });
  }
  next();
};

module.exports = checkRole;
