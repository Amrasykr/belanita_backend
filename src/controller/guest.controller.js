// guest.controller.js
import {
  getAllArticle as getAllArticlesService,
  getArticleById as getArticleByIdService,
  getAllProduct as getAllProductsService,
  getProductById as getProductByIdService,
} from "../service/guest.service.js";

// Article Services
export const getAllArticle = async (req, res) => {
  try {
    const articles = await getAllArticlesService();
    res.status(200).send(articles);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const articleId = parseInt(req.params.id);
    const article = await getArticleByIdService(articleId);
    res.status(200).send(article);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Product Services
export const getAllProduct = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await getProductByIdService(productId);
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
