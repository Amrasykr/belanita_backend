import { check, validationResult } from "express-validator";

const rules = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .escape(),

  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email")
    .trim()
    .normalizeEmail(),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .trim()
    .escape(),

  check("status").notEmpty().withMessage("Status is required").trim().escape(),

  check("nim").notEmpty().withMessage("NIM is required").trim().escape(),

  check("role").notEmpty().withMessage("Role is required").trim().escape(),
];

export const userFormValidator = [
  rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },
];
