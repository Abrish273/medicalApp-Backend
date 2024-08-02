const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = new User({ email, password, role });
    const savedUser = await user.save();
    console.log("savedUser", savedUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    console.log("user", user);
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      "your_jwt_secret",
      {
        expiresIn: "1m",
      }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
