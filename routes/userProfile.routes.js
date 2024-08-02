const express = require("express");
const {
  getUserProfile,
  getUserProfileAdmin,
} = require("../controllers/userProfile.controller");
const authenticateToken = require("../middleware/authmiddleware");
const checkRole = require("../middleware/checkRole");
const router = express.Router();

router.get(
  "/profileAdmin",
  authenticateToken,
  checkRole(["admin"]),
  getUserProfileAdmin
);
router.get("/profile", authenticateToken, checkRole(["user"]), getUserProfile);

module.exports = router;
