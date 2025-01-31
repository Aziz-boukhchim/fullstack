import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const BlogDetails = () => {

    // Get blog ID from URL
    const {id} = useParams();
    const [blog , setBlog] = useState(null);

     // Fetch blog data
     useEffect(()=> {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
             .then(response => setBlog(response.data))
             .catch(error => console.error("error occured:", error));
     },[id]);

     if(!blog) return <h2>Loading...</h2>

     return(
        <div>
            <h1>{blog.title}</h1>
            <h2>{blog.content}</h2>
        </div>
     );




}
export default BlogDetails;