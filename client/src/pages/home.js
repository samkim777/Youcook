import { useEffect, useState } from "react"
import axios from "axios"
import { Youtubeplayer } from "./Youtubeplayer";


export const Home = () => {
    const [value, setValue] = useState("");
    const [videos, setVideos] = useState([]);

    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await getData();
            setVideos(response);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {

    }, []);

    const getData = () => {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:3001/videoInfo", { recipe: { value } })
                .then(response => {
                    const data = response.data;
                    resolve(data);
                    console.log(data);
                }
                )
                .catch(err => {
                    console.error(err);
                    reject(err);
                })
        })
    }
    return (
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <label>Search Recipe:
                    <input type="text" value={value} onChange={handleChange}></input>
                </label>
                <button type="submit">Submit</button>
                <Youtubeplayer videoIds={videos} />
            </form>
        </div>
    );
}