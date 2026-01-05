import mongoose from "mongoose";



const tagSchema = new mongoose.Schema({

    options: [{
        value: String,
        label: String
    },],


})


export const tag = mongoose.models.tag || mongoose.model("tag", tagSchema)
