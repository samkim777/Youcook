import express from "express";
import dotenv from "dotenv";
import { UserModel } from "../models/Users.js";


const router = express.Router();
dotenv.config({ path: "../.env" });

router.get("/", async (req, res) => {
    const userId = req.params.id;
    const user = await UserModel.findById("64a8e7a3cb0e9bc6d75c1412"); // Finds user by id
    console.log(user);
    res.send(user.savedVideos); // Send list of saved embedded videos
    console.log("Sent: ", user.savedVideos);

})

export {router as savedRouter}