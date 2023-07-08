const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const userRouter = require('./routes/user.js');
const videoRouter = require('./routes/search.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/videoInfo", videoRouter);

// Connect to DB
mongoose.connect(process.env.CRED);

app.listen(3001, () => {
  console.log('Server started');
});
