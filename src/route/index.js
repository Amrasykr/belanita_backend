import express from "express";
import guestRouter from "./guest.route.js";
import adminRouter from "./admin.route.js";
import officerRouter from "./officer.route.js";
import userRouter from "./user.route.js";

const router = express.Router();

// Guest Routes
router.use("/", guestRouter);

// Admin Routes
router.use("/admin/dashboard", adminRouter);

// Officer Routes
router.use("/officer/dashboard", officerRouter);

// User Routes
router.use("/user", userRouter);

export default router;
