const User = require("../models/user.model");

const getUserProfileAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "Admin screen", user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User screen", user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getUserProfileAdmin, getUserProfile };
