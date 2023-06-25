const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be provided"],
    },
    email: {
        type: String,
        required: [true, "email must be provided"],
    },
    phoneNumber: {
        type: String,
        maxLength: 10,
        minLength: 10,
        required: [true, "phone number must be provided"],
    },
    profileImage: {
        type: String,
        maxLength: 150,
    },
    hostelName:{
        type: String,
    },
    roomNumber:{
        type: String,
    },
    productsRented: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    productsSold: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    productBought: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    productsRequested: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
