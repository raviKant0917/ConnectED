import mongoose from "mongoose";
import express from 'express'
import { user } from "../models/users.js";

const registerUsers = async (req, res) => {
    try {
        const newUser = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            profileUrl: req.body.profileUrl,
        };    

        const userFound = await user.findOne({email: newUser.email});
        if(userFound) {
            return res.status(200).json({
                message: "User alreday exists",

            })
        }

        await user.create(newUser)
        res.status(201).json({
            success: 'true',
            body: newUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong!",
            error: error.message
        })
    }

} 


export {registerUsers};