const express = require('express');
const jwt = require('jsonwebtoken')

const jwtAuth = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(501).json({
            message: "Something went wrong",
        });
    } else {
        token = token.split(" ")[1];
        try {
            console.log(token);
            const user = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(user);
            console.log("token verified");
            next();
        } catch (e) {
            res.status(401).json({
                message: "Unauthorized access",
            });
        }
    }
};

module.exports = jwtAuth
