import express from "express";

const userRouter = express.Router();

// User Profile
userRouter.get("/profile", (req, res) => {
  res.send("User See Profile");
});

userRouter.patch("/profile", (req, res) => {
  res.send("User Update Profile");
});

// User Article Comment
userRouter.post("/comment", (req, res) => {
  res.send("User Create Comment at Article");
});

// User Buy Product
userRouter.post("/buy", (req, res) => {
  res.send("User Buy Product");
});

// User Form
userRouter.get("/forms", (req, res) => {
  res.send("User Look All Form Created by User");
});

userRouter.get("/form/:id", (req, res) => {
  res.send("User Look Detail Form");
});

userRouter.post("/form", (req, res) => {
  res.send("User Submit Form");
});

// User Alert
userRouter.get("/alerts", (req, res) => {
  res.send("User Look All Alert");
});

userRouter.get("/alert/:id", (req, res) => {
  res.send("User Look Detail Alert");
});

userRouter.post("/alert", (req, res) => {
  res.send("User post Alert");
});

export default userRouter;
