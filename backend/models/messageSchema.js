const mongoose = require('mongoose')

const msgSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.ObjectId,
        ref: "Room"
    },
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

const msgModel = mongoose.model('msgModel', msgSchema)

module.exports = msgModel