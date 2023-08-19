import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

// Register request
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

// Login Request
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  // User doesn't exist
  if (!user) {
    alert("User or password incorrect");
    return res.status(404).json({ message: "User or password incorrect" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "User or password incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

export { router as userRouter };

// export const verifyToken = (req,res,next) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         jwt.verify(authHeader,"secret", (err) => {
//             if (err) {
//                 return res.status(400);
//             }
//             next();
//         })
//     } else {
//         res.sendStatus(401);
//     }
// }
