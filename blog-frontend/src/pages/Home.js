import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";
import Delete from "./Delete";

// FETCH AND DISPLAY BLOGS

const Home = () => {
     // State to store blog posts
     const [blogs , setBlogs] = useState([]);
    
    // Fetch blogs from the backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/blogs")
             .then(response => setBlogs(response.data))
             .catch(error => console.error("Error fetching blogs : ", error));

    }, []);

    const removeBlog =(id) => {
        setBlogs(blogs.filter(blog => blog._id !== id));
    }

    return (
        <div>
            <h1>Blog Posts</h1>
            <Link to="/create">Create new Blog</Link>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <Link to={`/blogs/${blog._id}`}>{blog.title} - {blog.content}</Link>
                       ------
                        <Link to={`/blogs/update/${blog._id}`} >Edit</Link>
                        ------
                        <Delete id={blog._id} removeBlog={removeBlog}></Delete>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default Home;