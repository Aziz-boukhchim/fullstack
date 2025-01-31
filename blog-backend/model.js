const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title : {type : String , required : true},
        content : {type : String , required : true},
    },
    {timestamps: true} // Automatically adds createdAt and updatedAt fields
)

// Create and export the Blog model
module.exports = mongoose.model("Blog", blogSchema);