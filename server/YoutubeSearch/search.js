require('dotenv').config();

const express = require("express")
const { google } = require('googleapis');
const apiKey = process.env.API_KEY; // Api Key
const cors = require("cors");
const app = express();
const port = 3001;
const axios = require("axios");


//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json())

app.get("/videoInfo", (req, res) => {
  console.log("ah shiet")
  res.end();
})

app.post("/videoInfo", async (req, res) => {
  try {
    const foodName = req.body.recipe.value;
    const recipe = await getRecipe(foodName); // Get video titles
    // Actually not sending anything
    res.send(recipe);
    console.log(recipe);
    console.log("Sent! with requested word", foodName);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


function getRecipe(food) {
  return new Promise((resolve, reject) => {
    const youtube = google.youtube({
      version: 'v3',
      auth: apiKey
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
        const items = response.data.items;
        const recipe = [];
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



