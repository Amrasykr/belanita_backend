import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./user.js";
import Form from "./form.js";

const { DataTypes } = Sequelize;
const Perception = db.define(
  "perception",
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
    formId: {
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

User.hasMany(Perception);
Perception.belongsTo(User, { foreignKey: "userId" });

Form.hasMany(Perception);
Perception.belongsTo(Form, { foreignKey: "formId" });

export default Perception;
