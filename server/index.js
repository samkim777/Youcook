import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {userRouter} from "./routes/user.js";
import {videoRouter} from "./routes/search.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/videoInfo", videoRouter);

// Connect to DB
mongoose.connect(process.env.CRED);

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
