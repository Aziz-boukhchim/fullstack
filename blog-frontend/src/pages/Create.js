import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState();
    const [content,setContent] = useState();
    const navigate = useNavigate();

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/api/blogs" , {title , content})
             .then(() => navigate("/")) // Redirect to home after creation
             .catch(error => console.error("Error occured: " , error));
    };

    return (
        <div>
            <h1>Creating a blog</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                <textarea placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Create;