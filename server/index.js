import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import videoRouter from "./routes/search.js";
import { savedRouter } from "./routes/savedVideos.js";
import {micro} from 'micro';
import {mcors} from 'micro-cors';

dotenv.config();
const app = express();
const send = micro();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/videoInfo", videoRouter);
app.use("/auth", userRouter);
app.use("/saved", savedRouter);

// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

const handler = (req, res) => {
  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok!');
  }

  if (req.method !== 'POST') {
    throw createError(404, 'Not Found');
  }

  // handle incoming request as usual
}

module.exports = cors(handler)

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
