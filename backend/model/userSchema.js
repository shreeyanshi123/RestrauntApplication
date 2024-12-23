const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 10, 
        maxlength: 300, 
        trim: true, 
    },
    firstName: {
        type: String,
        required: true,
        trim: true, 
    },
    lastName: {
        type: String,
        required: true,
        trim: true, 
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model('User', userSchema);
