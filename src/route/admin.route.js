import express from "express";
import { userFormValidator } from "../middleware/userFormValidator.js";
import { productFormValidator } from "../middleware/productFormValidator.js";
import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/admin.controller.js";

const adminRouter = express.Router();

// Admin Profile
adminRouter.get("/profile", (req, res) => {
  res.send("Admin See Profile");
});

adminRouter.patch("/profile", (req, res) => {
  res.send("Admin Update Profile");
});

// Admin Verifying User
adminRouter.get("/users", getAllUser);
adminRouter.get("/user/:id", getUserById);
adminRouter.post("/user", userFormValidator, createUser);
adminRouter.patch("/user/:id", updateUser);
adminRouter.delete("/user/:id", deleteUser);

// Admin Article
adminRouter.get("/articles", (req, res) => {
  res.send("Admin Look All Article");
});
adminRouter.get("/article/:id", (req, res) => {
  res.send("Admin Look Detail Article");
});
adminRouter.post("/article", (req, res) => {
  res.send("Admin Create Article");
});
adminRouter.patch("/article/:id", (req, res) => {
  res.send("Admin Update Article");
});
adminRouter.delete("/article/:id", (req, res) => {
  res.send("Admin Delete Article");
});

// Admin Product
adminRouter.get("/products", getAllProduct);
adminRouter.get("/product/:id", getProductById);
adminRouter.post("/product", productFormValidator, createProduct);
adminRouter.patch("/product/:id", updateProduct);
adminRouter.delete("/product/:id", deleteProduct);

export default adminRouter;
