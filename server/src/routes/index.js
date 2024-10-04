import { Router } from "express";
const router = Router();
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
