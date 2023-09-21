import axios from "axios";
import { userID } from "../hooks/userID.js";

export const Youtubeplayer = ({ videoIds }) => {
  const myid = userID();

  const buttonHandler = (videoSrc) => (event) => {
    event.preventDefault();
    event.currentTarget.disabled = true;
    axios.put("https://youcook-e768.vercel.app/videoInfo", { src: videoSrc, id: myid }); // Send save video request

    console.log("Current video source:", videoSrc);
  };

  return (
    <div>
      {videoIds.map((videoId) => (
        <div key={videoId} className="video-container">
          <button
            className="save-button"
            onClick={buttonHandler(`https://www.youtube.com/embed/${videoId}`)}
          >
            Save video
          </button>
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
};
