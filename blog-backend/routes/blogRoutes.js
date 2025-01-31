const express = require("express");
const Blog = require("../model"); // import blog model


const router = express.Router();

//fetch blog
router.get("/" , async (req,res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs)
    } catch (err) {
        res.status(500).json({error : "failed to fetch blogs"})
    }
});

//create blog
router.post("/" , async(req,res) => {
    try {
        const {title,content} = req.body;
        const newBlog = new Blog({title,content});
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({error : "failed to create blog"});
    }
});

//fetch by ID
router.get("/:id" , async(req,res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({error : "blog not found"});
        res.json(blog);
    } catch (error) {
        res.status(500).json({error : "Failed to fetch blogs"});
    }
});

//update by ID
router.put("/:id" , async(req,res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id , req.body , {new : true})
        if(!updatedBlog) return res.status(404).json({error : "Could not found the blog"});
        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({error : "failed to update"});
    }
});




//delete by ID
router.delete("/:id", async(req,res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if(!deletedBlog) return res.status(404).json({error : "failed to find the blog"});
        res.json({message : "Blog deleted successfully"});
    } catch {
        res.status(500).json({error : "failed to delete"});         
    }
});


module.exports = router;