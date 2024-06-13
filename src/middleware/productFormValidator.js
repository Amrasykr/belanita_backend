import { check, validationResult } from "express-validator";

const rules = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .escape(),

  check("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .trim()
    .escape(),

  check("stock")
    .notEmpty()
    .withMessage("Stock is required")
    .isNumeric()
    .withMessage("Stock must be a number")
    .trim()
    .escape(),

  check("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string")
    .trim()
    .escape(),

  check("image")
    .notEmpty()
    .withMessage("Image is required")
    .isString()
    .withMessage("Image must be a string")
    .trim()
    .escape(),
];


export const productFormValidator = [
  rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },
];