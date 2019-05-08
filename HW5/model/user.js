const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    }
});

mongoose.model('user', userSchema,'users');

const User = mongoose.model('user');

