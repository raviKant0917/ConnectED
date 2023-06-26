const express = require('express')
const mongoose = require('mongoose')

const Room = require('./../models/roomSchema');
exports.createRoom = async(req, res) => {
    try {
        const {user1, user2} = req.body
        const roomCreated = await Room.create({user1: user1, user2: user2})
        res.status(200).json({
            room: roomCreated
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({
            rooms: rooms
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message,
        });
    }
};

exports.getRoomById = async (req, res) => {
    try {
        const roomId = req.params.id
        const room = await Room.findById(roomId);
        console.log(room);
        res.status(200).json({
            room: room
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message,
        });
    }
};
