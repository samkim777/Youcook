import { useEffect, useState } from "react";
import axios from "axios"
import { userID } from "../hooks/userID.js"



export const SavedVideos = () => {
    const [videoIds, setVideoIds] = useState([]);
  
    const getVideos = async () => {
      try {
        const userid = userID();
        const response = await axios.get('http://localhost:3001/saved', { params: { id: userid } });
        setVideoIds(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div>
            {videoIds.map((videoId) => (
                <div key={videoId} className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src={videoId}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );

}


