import { check, validationResult } from "express-validator";

const rules = [
  check("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string")
    .trim()
    .escape(),

  check("content")
    .notEmpty()
    .withMessage("Content is required")
    .isString()
    .withMessage("Content must be a string")
    .trim()
    .escape(),

  check("status").notEmpty().withMessage("Status is required").trim().escape(),

  check("userId").notEmpty().withMessage("Author is required").trim().escape(),
];

export const articleFormValidator = [
  rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },
];