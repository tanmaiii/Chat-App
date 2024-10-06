import Joi from "joi";

const signupValidation = (data) => {
  const signupSchema = Joi.object({
    name: Joi.string()
      .required()
      .messages({ "any.required": "Name is required" }),
    email: Joi.string().email().required().messages({
      "any.required": "Email is required",
      "string.email": "Email must be valid",
    }),
    password: Joi.string()
      .required()
      .messages({ "any.required": "Password is required" }),
  });

  return signupSchema.validate(data);
};

const loginValidation = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
      "any.required": "Email is required",
      "string.email": "Email must be valid",
    }),
    password: Joi.string()
      .required()
      .messages({ "any.required": "Password is required" }),
  });

  return loginSchema.validate(data);
};

export default {
  signupValidation,
  loginValidation,
};
