import {
  findUsers,
  findUserById,
  postUser,
  editUserById,
  deleteUserById,
  findProducts,
  findProductById,
  postProduct,
  editProductById,
  deleteProductById,
} from "../repository/admin.repository.js";

// User services
export const getAllUser = async () => {
  const users = await findUsers();

  if (!users) {
    throw new Error("Users Not Found");
  }

  return users;
};

export const getUserById = async (userId) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error("User Not Found");
  }

  return user;
};

export const createUser = async (data) => {
  const user = await postUser(data);

  if (!user) {
    throw new Error("User Not Created");
  }

  return user;
};

export const updateUser = async (userId, data) => {
  const user = await editUserById(userId, data);

  if (!user) {
    throw new Error("User Not Updated");
  }

  return user;
};

export const deleteUser = async (userId) => {
  const user = await deleteUserById(userId);

  if (!user) {
    throw new Error("User Not Deleted");
  }

  return user;
};

// Product services
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

export const createProduct = async (data) => {
  const product = await postProduct(data);

  if (!product) {
    throw new Error("Product Not Created");
  }

  return product;
};

export const updateProduct = async (productId, data) => {
  const product = await editProductById(productId, data);

  if (!product) {
    throw new Error("Product Not Updated");
  }

  return product;
};

export const deleteProduct = async (productId) => {
  const product = await deleteProductById(productId);

  if (!product) {
    throw new Error("Product Not Deleted");
  }

  return product;
};
