import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config'
import {userRouter} from './routes/users.js'



const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter)

mongoose.connect(process.env.CRED)

app.listen(3001, () => {
    console.log('Server started');
})