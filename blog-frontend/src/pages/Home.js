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
    <div className="container mt-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <div className="text-center mb-4">
        <Link to="/create" className="btn btn-dark btn-lg">
          Create New Blog
        </Link>
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">
                  {blog.content.length > 100
                    ? `${blog.content.substring(0, 100)}...`
                    : blog.content}
                </p>
                <div className="d-flex justify-content-between">
                  <Link to={`/blogs/${blog._id}`} className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                  <div>
                    <Link to={`/blogs/update/${blog._id}`} className="btn btn-primary btn-sm me-2">
                      Edit
                    </Link>
                    <Delete id={blog._id} removeBlog={removeBlog} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
