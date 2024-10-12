/* import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },

});
const User=mongoose.model("users",UserSchema);
export default User; */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3, // Minimum length for usernames
        maxlength: 30 // Maximum length for usernames
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regex to validate email format
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum length for passwords
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

const User = mongoose.model('users', userSchema);
module.exports = User;
