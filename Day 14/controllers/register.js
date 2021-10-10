const User = require("../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const register = async (req, role, res) => {
  const { name, email, password } = req.body;

  try {
    const alreadyExists = await User.findOne({ where: { email: email } });
    if (alreadyExists) {
      res.status(401).json({ message: "User already Exists" });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name: name,
      role: role,
      email: email.toLowerCase(),
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ message: "User registered successfully!", user: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong, cant register" });
  }
};

module.exports = register;
