import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs: ", error));
  }, []);

  const removeBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <div className="text-center mb-3">
        <Link to="/create" className="btn btn-primary">
          Create New Blog
        </Link>
      </div>

      <ul className="list-group">
        {blogs.map((blog) => (
          <li key={blog._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/blogs/${blog._id}`} className="text-decoration-none">
              <strong>{blog.title}</strong> - {blog.content}
            </Link>

            <div>
              <Link to={`/blogs/update/${blog._id}`} className="btn btn-sm btn-warning me-2">
                Edit
              </Link>
              <Delete id={blog._id} removeBlog={removeBlog} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
