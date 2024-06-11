import db from "../config/database.js";

import User from "./user.js";
import Article from "./article.js";
import Product from "./product.js";
import Form from "./form.js";
import Alert from "./alert.js";
import Comment from "./comment.js";
import Perception from "./perception.js";

export const migrate = async () => {
  try {
    await db.authenticate();
    console.log("Database connected...");

    await User.sync();
    await Article.sync();
    await Product.sync();
    await Form.sync();
    await Alert.sync();
    await Comment.sync();
    await Perception.sync();

    console.log("Database synchronized...");
  } catch (error) {
    console.error("Error: ", error);
  }
};
