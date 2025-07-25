import express from "express";
import { adminRoute, protectedRoute } from "../middleware/auth.middleware.js";
import { getAllProducts } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", protectedRoute, adminRoute, getAllProducts);
export default router;
