import { Router } from "express";
const router = Router();
import { login, logout, signup } from "../controllers/auth.controller.js";
import dotenv from "dotenv";
import validate from "../middlewares/validate.js";
import authValidation from "../validations/auth.validations.js";
dotenv.config();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;
