const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        minlength: 10, 
        maxlength: 300, 
        trim: true, 
    },
    content: {
        type: String,
        required: true,
        trim: true, 
    },
    image: {
        data: Buffer, 
        contentType: String, 
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model('Blog', blogSchema);
