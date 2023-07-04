
import { useState } from "react"
import axios from "axios"

export const Home = () => {
    const [value, setValue] = useState("");
    const [video, setVideo] = useState([]);

    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Send the value result to search function on server
        console.log({ value })
        getData()
    }

    const getData = async () => {
        try {
            // POST request with body data {recipe:{value}} where {value} is user input
            const request = await axios.post("http://localhost:3001/videoInfo",
                { recipe: { value } });
            const data = request.data // Response data will be a list of strings : [video_title,video_id,video_thumbnail_url]
            setVideo(data)
            console.log(data);

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <label>Search Recipe:
                    <input type="text" value={value} onChange={handleChange}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}