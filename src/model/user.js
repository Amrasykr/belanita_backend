import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.ENUM("user", "admin", "officer"),
      defaultValue: "user",
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nim: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "banned", "rejected"),
      defaultValue: "active",
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

export default User;
