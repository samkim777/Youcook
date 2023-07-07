import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userOwner : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required: true
    }
});

export const VideoModel = mongoose.model("videos", VideoSchema)