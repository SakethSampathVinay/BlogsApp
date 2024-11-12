/*// src/models/blog.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Blog title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Blog description is required"],
        trim: true
    }
}, {
    timestamps: true
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
*/


import mongoose from "mongoose"


// database 
// model 
// api routes -> add, fetch /get, update, delete

const BlogSchema = new mongoose.Schema({
    title: String,
    description: String
})


const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
