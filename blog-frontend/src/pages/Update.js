import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Update = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing blog post data when the component mounts
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => console.error("xError fetching blog data: ", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send PUT request to update the blog
    axios
      .put(`http://localhost:5000/api/blogs/${id}`, { title, content })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error occurred: ", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update Blog</h1>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Blog Content
          </label>
          <textarea
            id="content"
            className="form-control"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
