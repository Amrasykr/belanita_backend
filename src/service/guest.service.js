import {
  findArticles,
  findArticleById,
  findProducts,
  findProductById,
} from "../repository/guest.repository.js";

// Artikel Services
export const getAllArticle = async () => {
  const articles = await findArticles();

  if (!articles) {
    throw new Error("Articles Not Found");
  }

  return articles;
};

export const getArticleById = async (articleId) => {
  const article = await findArticleById(articleId);

  if (!article) {
    throw new Error("Article Not Found");
  }

  return article;
};

// Produk Services
export const getAllProduct = async () => {
  const products = await findProducts();

  if (!products) {
    throw new Error("Products Not Found");
  }

  return products;
};

export const getProductById = async (productId) => {
  const product = await findProductById(productId);

  if (!product) {
    throw new Error("Product Not Found");
  }

  return product;
};
