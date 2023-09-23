import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import videoRouter from "./routes/search.js";
import { savedRouter } from "./routes/savedVideos.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/videoInfo", videoRouter);
app.use("/auth", userRouter);
app.use("/saved", savedRouter);

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
