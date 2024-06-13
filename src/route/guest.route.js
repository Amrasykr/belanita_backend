import express from "express";
import {
  getAllArticle,
  getArticleById,
  getAllProduct,
  getProductById,
} from "../controller/guest.controller.js";

const guestRouter = express.Router();

// Product Page
guestRouter.get("/products", getAllProduct);

guestRouter.get("/product/:id", getProductById);

// Article Page
guestRouter.get("/articles", getAllArticle);

guestRouter.get("/article/:id", getArticleById);

export default guestRouter;
