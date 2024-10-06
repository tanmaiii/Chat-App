import User from "../models/User.js";
import passport from "passport";
import authValidation from "../validations/auth.validations.js";
import createError from "http-errors";
import { where } from "sequelize";
import bcrypt from "bcrypt"; // Removed as it is not used
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = authValidation.loginValidation(req.body);

    if (error) {
      throw createError(400, error.details[0].message);
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw createError(404, "User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw createError(400, "Password is incorrect");
    }

    const secret = "tanmai";

    const token = jwt.sign({ email: user.email, id: user.id }, secret, {
      expiresIn: "1h",
    });

    console.log(user.dataValues);

    const { password: pwd, ...other } = user.dataValues;

    const data = {
      data: other,
      token: token,
    };

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 900000),
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        status: "success",
        message: "Logged in successfully",
        ...data,
      });
  } catch (error) {
    return res.status(error.status || 500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const signup = async (req, res, next) => {
  try {
    const { error } = authValidation.signupValidation(req.body);

    if (error) {
      throw createError(400, error.details[0].message);
    }

    const isExits = await User.findOne({ where: { email: req.body.email } });

    if (isExits) {
      throw createError(400, "Email already exists");
    }

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    return res.status(200).json({
      status: "success",
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("accessToken");
  res.end();
};

export default {
  login,
  signup,
  logout,
};
