import mongoose from "mongoose";



const blogSchema = new mongoose.Schema({
    titleImge: String,
    title: String,
    content: Object,
    tags: [Object],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userEmail: String


});


export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
