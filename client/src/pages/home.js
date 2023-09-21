import { useEffect, useState } from "react";
import axios from "axios";
import { Youtubeplayer } from "./Youtubeplayer";

export const Home = () => {
  const [value, setValue] = useState("");
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getData(); // Gets video players 
      setVideos(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {}, []);

  const getData = () => {
    return new Promise((resolve, reject) => {
      axios
        .post("https://youcook-e768.vercel.app/videoInfo", { recipe: { value } })
        .then((response) => {
          const data = response.data; // List of video ids
          resolve(data);
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  };
  return (
    <div className="Home">
      <form id="home-search-form" onSubmit={handleSubmit}>
        <input
          placeholder="Search Recipe"
          className="home-search"
          type="text"
          value={value}
          onChange={handleChange}
        ></input>
        <button id="home-search-button" type="submit">
          Submit
        </button>
        <Youtubeplayer videoIds={videos} />
      </form>
    </div>
  );
};
