import { useState, useEffect } from "react";



export const Youtubeplayer = () => {
    const [videoIds, setvideoId] = useState([]);
    let video_list = ["NBdtDhZ9ojs","SJ6dWuY_VlQ"]
    useEffect(() => {
        setvideoId(video_list);
    }, [])

    return (
        <div>
            {videoIds.map((videoId) =>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player" frameborder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            )}

        </div>
    )

}




