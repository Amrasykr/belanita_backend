import Article from "../model/article.js";
import Comment from "../model/comment.js";
import Product from "../model/product.js";
import User from "../model/user.js";


// User repository
export const findArticles = async () => {
  const articles = await Article.findAll({
    include: [
      {
        model: User,
        where: {
          id: Article.userId,
        },
      },
    ],
  });
  return articles;
};

export const findArticleById = async (id) => {
  const article = await Article.findByPk(id, {
    include: [
      {
        model: Comment,
        where: {
          articleId: id,
        },
        required: false,
        order: [["createdAt", "DESC"]],
      },
      {
        model: User,
        where: {
          id: Article.userId,
        },
      },
    ],
  });
  return article;
};


// Product repository
export const findProducts = async () => {
  const products = await Product.findAll();
  return products;
};

export const findProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};
