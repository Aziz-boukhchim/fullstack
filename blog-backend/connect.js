mongoose = require("mongoose");


async function connectdb() {
    try {
        await mongoose.connect("mongodb+srv://azizprains06:rootroot@cluster0.5vugn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to database");
    } catch (error) {
        console.error("errror" , error);
    }
}

module.exports = connectdb;