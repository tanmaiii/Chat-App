import { Router } from "express";
const router = Router();
import userController from "../controllers/user.controller.js";

router.get("/:id", userController.getUser);
router.post("/", userController.createUser);

export default router;
