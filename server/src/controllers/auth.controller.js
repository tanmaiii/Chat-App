import User from "../models/User.js";
import passport from "passport";

const loginWithGoogle = async (req, res) => {
  try {
    return res.json("loginWithGoogle");
  } catch (error) {}
};

const loginWithGithub = async (req, res) => {
  try {
    return res.json("loginWithGoogle");
  } catch (error) {}
};

export default {
  loginWithGoogle,
  loginWithGithub,
};
