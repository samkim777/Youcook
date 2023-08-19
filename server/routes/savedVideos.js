import express from "express";
import dotenv from "dotenv";
import { UserModel } from "../models/Users.js";

const router = express.Router();
dotenv.config({ path: "../.env" });

router.get("/", async (req, res) => {
  const userId = req.query.id; // Retrieve id from query parameter
  const user = await UserModel.findById(userId); // Finds user by id
  console.log(user);
  res.send(user.savedVideos); // Send list of saved embedded videos
  console.log("Sent: ", user.savedVideos);
});

export { router as savedRouter };
