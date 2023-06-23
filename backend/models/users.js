import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false,
        maxLength: 10
    },
    profileUrl: {
        type: String,
        maxLength: 100
    },
});

export const user = mongoose.model('User', User);