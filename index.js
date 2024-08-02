require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/user.routes");
const userRoutes = require("./routes/userProfile.routes");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/auth_db", {
// console.log("process.env.DB_URL", process.env.DB_URL);
// mongoose.connect(process.env.DB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); // Add this line

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} and connected to db`);
});
