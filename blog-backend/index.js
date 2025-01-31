const connectdb = require("./connect")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();  // Load environment variables from .env file
const blogRoutes = require("./routes/blogRoutes");

// Initialize the Express app
const app = express();

//connect database
connectdb();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS to allow frontend communication
app.use(cors());

// Use blog routes
app.use("/api/blogs", blogRoutes);

// Default route to check if server is running
app.get("/" , (req,res) => {
    res.send("BLOG API IS RUNNING...");
});

// Start the server
app.listen(5000 , () => {
    console.log("Server is running on port 5000")
});
