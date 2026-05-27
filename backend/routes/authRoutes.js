import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signin", loginUser);

export default router;
