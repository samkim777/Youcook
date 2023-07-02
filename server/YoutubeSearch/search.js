require('dotenv').config()
import {express} from "express";


const YouTubePlayer = require('youtube-player');
const player = YouTubePlayer('player-element-id'); // This is going to connect to react div that has this id?
const { google } = require('googleapis');
const apiKey = process.env.API_KEY; // Api Key
const router = express.Router();

router.post("/videoInfo", async (req,res) => {
  try {
    const recipe = res.body.recipe
  } catch (err) {
    console.error(err)
  }
})


// Create a new YouTube instance
const youtube = google.youtube({
  version: 'v3',
  auth: apiKey
});

// Define the search parameters
const searchParams = {
  part: 'snippet', // The snippet object contains basic details about the video, such as its title, description, and category.
  q: {recipe}, // Replace with the search query
  type: 'video' // Only get the video 
};

// Perform the search
youtube.search.list(searchParams)
  .then(response => {
    const items = response.data.items;
    items.forEach(item => {
      console.log('Video Title:', item.snippet.title);
      console.log('Video ID:', item.id.videoId);
      console.log(item.snippet.thumbnails.high.url);
      console.log('---------------------------');
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });

  export {router as router}
