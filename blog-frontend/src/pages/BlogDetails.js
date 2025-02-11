import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.error("Error occurred:", error));
  }, [id]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <center><h1 className="card-title">{blog.title}</h1></center>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
