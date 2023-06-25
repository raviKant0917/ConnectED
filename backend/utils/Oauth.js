const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const User = require("../models/userSchema");
const express = require('express');
const oauthRouter = express.Router();

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "370371732623-s0c8dm319hau2li8huj0ppvgi7mf439g.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/google/callback",
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(refreshToken);
            try {
                console.log(profile);
                let existingUser = await User.findOne({
                    googleId: profile.id,
                });
                // if user exists return the user</em>;
                if (existingUser) {
                    return done(null, existingUser);
                }
                // if user does not exist create a new user</em>;
                console.log("Creating new user...");
                const newUser = new User({
                    method: "google",
                    email: profile.emails[0].value,
                    name: profile.displayName,
                    googleId: profile.id
                });
                await newUser.save();
                return done(null, newUser);
            } catch (error) {
                return done(error, false);
            }
        }
    )
);

// Redirect the user to the Google signin page
oauthRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

// Retrieve user data using the access token received
oauthRouter.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        res.redirect("/profile/");
    }
);
// profile route after successful sign in
oauthRouter.get("/profile", (req, res) => {
    res.send("Welcome");
});

oauthRouter.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) console.error(err);
    });
    res.redirect("/auth/google");
});

module.exports = oauthRouter