import axios from "axios";
import { userID } from "../hooks/userID.js"
import { useState } from "react";

export const Youtubeplayer = ({ videoIds }) => {
  const myid = userID();
  const [click, setClick] = useState(false);

  const buttonHandler = (videoSrc) => (event) => {
    event.preventDefault();
    axios.put("http://localhost:3001/videoInfo", { src: videoSrc, id: myid }); // Send save video request
    setClick(true);
    console.log("Current video source:", videoSrc);
  };


  return (
    <div>
      {videoIds.map((videoId) => (
        <div key={videoId} className="video-container">
          <button className="save-button" disabled={click} onClick={buttonHandler(`https://www.youtube.com/embed/${videoId}`)}>Save video</button>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}




