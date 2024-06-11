import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./user.js";

const { DataTypes } = Sequelize;
const Alert = db.define(
  "alert",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "in_progress", "rejected", "compleleted"),
      allowNull: false,
      validate: {
        notEmpty: true,
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

User.hasMany(Alert);
Alert.belongsTo(User, { foreignKey: "userId" });

export default Alert;
