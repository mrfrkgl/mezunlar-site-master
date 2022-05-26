const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: false,
        },
        photo: {
            type: String,
            required: false,
        },
        nameAndLastName: {
            type: String,
            required: true,
        },
        category: {
            type:Array,
            required: false, 
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);