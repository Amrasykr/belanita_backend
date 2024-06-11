import express from "express";
import { migrate } from "./src/model/index.js";

const app = express();

// // fungsi generate table
// const migration = migrate();

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
