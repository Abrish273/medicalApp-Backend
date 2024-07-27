require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/user.routes");
const userRoutes = require("./routes/userProfile.routes");
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/auth_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); // Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
