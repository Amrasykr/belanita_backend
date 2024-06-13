import express from "express";

const officerRouter = express.Router();

// Officer Profile
officerRouter.get("/profile", (req, res) => {
  res.send("Officer See Profile");
});

officerRouter.patch("/profile", (req, res) => {
  res.send("Officer Update Profile");
});

// Officer Alert
officerRouter.get("/alerts", (req, res) => {
  res.send("Officer Look All Alert");
});

officerRouter.get("/alert/:id", (req, res) => {
  res.send("Officer Look Detail Alert");
});

officerRouter.patch("/alert/:id", (req, res) => {
  res.send("Officer Update Alert");
});

officerRouter.delete("/alert/:id", (req, res) => {
  res.send("Officer Delete Alert");
});

// Officer Form
officerRouter.get("/forms", (req, res) => {
  res.send("Officer Look All Form");
});

officerRouter.get("/form/:id", (req, res) => {
  res.send("Officer Look Detail Form");
});

officerRouter.patch("/form/:id", (req, res) => {
  res.send("Officer Update Form");
});

officerRouter.delete("/form/:id", (req, res) => {
  res.send("Officer Delete Form");
});

officerRouter.post("/perception/:id", (req, res) => {
  res.send("Officer Create Perception");
});

officerRouter.patch("/perception/:id", (req, res) => {
  res.send("Officer Update Perception");
});

officerRouter.delete("/perception/:id", (req, res) => {
  res.send("Officer Delete Perception");
});

export default officerRouter;
