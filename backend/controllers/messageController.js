const express = require("express");
const mongoose = require("mongoose");

const Msg = require("./../models/messageSchema");

exports.createMsg = async (req, res) => {
    try {
        const { room, content, sender } = req.body;
        const msg = await Msg.create({ room: room, content: content, sender: sender })
        res.status(200).json({
            message: msg
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getAllMsg = async (req, res) => {
    try {
        const roomId = req.params.roomId;
        const messages = Msg.find({room: roomId})
        res.status(200).json({
            messages: messages,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message,
        });
    }
};

