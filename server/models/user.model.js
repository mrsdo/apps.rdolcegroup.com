/**
 * user.model.js
 *
 * Use Mongoose to build a User Schema
 */
const mongoose = require('mongoose');

/*const User = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        // use regex for further validation
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
        default: 'user',
        // index: true, TODO: What is schema role index?
    },

});

module.exports = mongoose.model('User', UserSchema);*/

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        firstname: String,
        lastname: String,
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

module.exports = User;