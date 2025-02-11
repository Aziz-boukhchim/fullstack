import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Create = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/blogs", { title, content })
      .then(() => navigate("/")) // Redirect to home after creation
      .catch((error) => console.error("Error occurred: ", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create a Blog</h1>
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
