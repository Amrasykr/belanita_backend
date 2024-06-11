import { Sequelize } from "sequelize";

const db = new Sequelize("belanita_backend", "ammar", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
