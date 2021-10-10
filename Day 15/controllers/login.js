const User = require("../models/User");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    const userId = user.dataValues.id;
    const role = user.dataValues.role;
    const name = user.dataValues.name;

    const token = jwt.sign(
      {
        userId: userId,
        name: name,
        role: role,
        email: email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "360000000",
      }
    );

    switch (role) {
      case "admin":
        res.status(200).json({ message: "Welcome Admin", user, token });
      case "superAdmin":
        res.status(200).json({ message: "Welcome Super Admin", user, token });

      default:
        res.status(200).json({ message: "Welcome User", user, token });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
