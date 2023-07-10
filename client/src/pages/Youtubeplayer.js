export const Youtubeplayer = ({ videoIds }) => {

    const buttonHandler = (videoSrc) => (event) => {
        event.preventDefault();
        console.log("Current video source:", videoSrc);
      };
      

    return (
        <div>
          {videoIds.map((videoId) => (
            <div key={videoId} className="video-container">
                <button className="save-button" onClick={buttonHandler(videoId)}>Save video</button>
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




