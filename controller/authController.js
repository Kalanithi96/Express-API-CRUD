const User = require("../models/user");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  try {
    const New = await User.create({ username: username, password: hash });
    res.status(201).json({
      message: "User created",
      data: New,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: "Failed to create user",
    });
  }
  return res;
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      return res.status(200).json({
        message: "User found and Password matches",
      });
    } else {
      return res.status(404).json({
        message: "User found and Password did not match",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: "Failed to login",
    });
  }
};

module.exports = {
  signUp,
  login,
};
