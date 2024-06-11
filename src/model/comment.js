import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Article from "./article.js";
import User from "./user.js";

const { DataTypes } = Sequelize;
const Comment = db.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

User.hasMany(Comment);
Comment.belongsTo(User, { foreignKey: "userId" });

Article.hasMany(Comment);
Comment.belongsTo(Article, { foreignKey: "articleId" });

export default Comment;
