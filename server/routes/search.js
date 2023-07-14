import dotenv from "dotenv";
import { google } from "googleapis";
import express from "express";
import { UserModel } from "../models/Users.js";


const videoRouter = express.Router();
dotenv.config({ path: "../.env" });




// Saving logic
videoRouter.put("/", async (req, res) => {
  const user = await UserModel.findById(req.body.id);
  try {
    if (user) {
      if (!user.savedVideos.includes(req.body.src)) {
        user.savedVideos.push(req.body.src);
      }
      await user.save();
    }
  } catch (err) {
    console.error(err);
  }

})




videoRouter.post("/", async (req, res) => {
  try {
    const foodName = req.body.recipe.value;
    const recipe = await getRecipe(foodName); // Get video titles
    res.send(recipe);
    console.log(recipe);
    console.log("Sent! with requested word", foodName);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});




function getRecipe(food) {
  return new Promise((resolve, reject) => {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.API_KEY
    });

    const searchParams = {
      part: 'snippet',
      q: food,
      type: 'video',
      safeSearch: 'none',
      maxResults: 10
    };

    youtube.search.list(searchParams)
      .then(response => {
        const recipe = [];
        const items = response.data.items;
        for (let i = 0; i < items.length; i++) {
          recipe.push(items[i].id.videoId);
          console.log(items[i].snippet.title);
        }
        // Resolve the promise for recipe List
        resolve(recipe);
      })
      .catch(err => {
        console.error('Error:', err);
        reject(err);
      });
  });
}

export default videoRouter;