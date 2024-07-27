const express = require("express");
const { getUserProfile } = require("../controllers/userProfile.controller");
const authenticateToken = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/profile", authenticateToken, getUserProfile);

module.exports = router;
