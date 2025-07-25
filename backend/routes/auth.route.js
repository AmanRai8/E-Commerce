import express from "express";
import {
  login,
  logout,
  signup,
  refreshToken,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken); // Assuming you have a refreshToken controller
// router.get("/profile", userProfile); // Assuming you have a userProfile controller

export default router;
