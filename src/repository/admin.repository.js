import User from "../model/user.js";
import Article from "../model/article.js";
import Comment from "../model/comment.js";
import Product from "../model/product.js";

// User repository
export const findUsers = async () => {
  const users = await User.findAll({
    where: {
      role: "user",
    },
    attributes: { exclude: ["password"] },
  });

  return users;
};

export const findUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  return user;
};

export const postUser = async (data) => {
  const { name, email, password, status, nim, role } = data;
  const user = await User.create({
    name,
    email,
    password,
    status,
    nim,
    role,
  });

  return user;
};

export const editUserById = async (id, data) => {
  const user = await findUserById(id);
  if (!user) {
    return null;
  }

  const { name, email, password, status, nim, role } = data;
  await User.update(
    {
      name,
      email,
      password,
      status,
      nim,
      role,
    },
    {
      where: {
        id,
      },
    }
  );

  return await findUserById(id);
};

export const deleteUserById = async (id) => {
  const user = await findUserById(id);
  if (!user) {
    return null;
  }

  await User.destroy({
    where: {
      id,
    },
  });

  return user;
};

// Article repository
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

export const postArticle = async (data) => {
  const { title, content, userId, image, status, isRead } = data;
  const article = await Article.create({
    title,
    content,
    userId,
    image,
    status,
    isRead,
  });

  return article;
};

export const editArticleById = async (id, data) => {
  const article = await findArticleById(id);
  if (!article) {
    return null;
  }

  const { title, content, userId, image, status, isRead } = data;
  await Article.update(
    {
      title,
      content,
      userId,
      image,
      status,
      isRead,
    },
    {
      where: {
        id,
      },
    }
  );

  return await findArticleById(id);
};

export const deleteArticleById = async (id) => {
  const article = await findArticleById(id);
  if (!article) {
    return null;
  }

  await Article.destroy({
    where: {
      id,
    },
  });

  return article;
};

// Products repository
export const findProducts = async () => {
  const products = await Product.findAll();
  return products;
};

export const findProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

export const postProduct = async (data) => {
  const { name, price, image, description, stock } = data;
  const product = await Product.create({
    name,
    price,
    image,
    description,
    stock,
  });

  return product;
};

export const editProductById = async (id, data) => {
  const product = await findProductById(id);
  if (!product) {
    return null;
  }

  const { name, price, image, description, stock } = data;
  await Product.update(
    {
      name,
      price,
      image,
      description,
      stock,
    },
    {
      where: {
        id,
      },
    }
  );

  return await findProductById(id);
};

export const deleteProductById = async (id) => {
  const product = await findProductById(id);
  if (!product) {
    return null;
  }

  await Product.destroy({
    where: {
      id,
    },
  });

  return product;
};
