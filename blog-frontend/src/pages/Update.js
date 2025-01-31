import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [title , setTitle] = useState();
    const [content , setContent] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/api/blogs/${id}`, {title , content})
             .then(() => navigate("/"))
             .catch(error => console.error("Error occured : ",error));
    }
    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
                <button type="submit">submit</button>
            </form>
        </div>

    );
}

export default Update;