import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
