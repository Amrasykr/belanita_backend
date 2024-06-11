import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./user.js";

const { DataTypes } = Sequelize;
const Article = db.define(
  "article",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    image: {
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
    status: {
      type: DataTypes.ENUM("draft", "published", "archived"),
      allowNull: false,
      validate: {
        notEmpty: true,
        defaultValue: "draft",
      },
    },
    is_read: {
      type: DataTypes.BOOLEAN,
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

User.hasMany(Article);
Article.belongsTo(User, { foreignKey: "userId" });

export default Article;
