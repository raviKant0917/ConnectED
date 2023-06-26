const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    content: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const roomSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    user2: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    messages: {
        type: [msgSchema]
    }
},{
    timestamps: true
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
