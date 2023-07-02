import { VideoPlayer } from "../components/Videoplayer"
import { useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"

export const Home = () => {
    const [value, setValue] = useState("");
    const [video, setVideo] = useState("");
    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Send the value result to search function on server
        console.log({value})
        getData()
    }

    const getData = async (req,res) => {
        try {
            const request = await axios.post("http://localhost:3001/videoInfo",{recipe : {value}});
            const data = request.data // Response data
            setVideo(data)
            return <div>{video}</div>

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