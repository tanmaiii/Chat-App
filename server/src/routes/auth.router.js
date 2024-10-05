import { Router } from "express";
const router = Router();
import authController from "../controllers/auth.controller.js";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

router.get("/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

router.get("/login/failed", (req, res) => {
  return res.status(401).json({ success: false, message: "Login failed" });
});

router.get("/logout", (req, res) => {
  req.logout();
  return res.redirect(process.env.URL_FRONTEND);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.URL_FRONTEND,
    failureRedirect: "api/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.URL_FRONTEND,
    failureRedirect: "/login/failed",
  })
);

export default router;
