import {
  getAllUser as getAllUserService,
  getUserById as getUserByIdService,
  createUser as createUserService,
  updateUser as updateUserService,
  deleteUser as deleteUserService,
  getAllProduct as getAllProductService,
  getProductById as getProductByIdService,
  createProduct as createProductService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
} from "../service/admin.service.js";

// User Controller
export const getAllUser = async (req, res) => {
  try {
    const users = await getAllUserService();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await getUserByIdService(userId);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await createUserService(data);
    const message = `User ${user.name} created successfully`;
    res.status(200).send({ message });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const data = req.body;
    const user = await updateUserService(userId, data);
    const message = `User ${user.name} updated successfully`;
    res.status(200).send({ message });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await deleteUserService(userId);
    const message = `User ${user.name} deleted successfully`;
    res.status(200).send({ message });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Product Controller
export const getAllProduct = async (req, res) => {
  try {
    const products = await getAllProductService();
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

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = await createProductService(data);
    const message = `Product ${product.name} created successfully`;
    res.status(200).send({ message });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const data = req.body;
    const product = await updateProductService(productId, data);
    const message = `Product ${product.name} updated successfully`;
    res.status(200).send({ message });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await deleteProductService(productId);
    const message = `Product ${product.name} deleted successfully`;
    res.status(200).send({ message });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
