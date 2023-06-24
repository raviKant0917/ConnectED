const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/registerUser").post(userController.createUser)
router.route("/getAllUsers").get(userController.getAllUsers)
router.route("/deleteUser/:id").get(userController.deleteUser)
router.route("/checkIfUserExists").get(userController.checkIfUserExists)

    

module.exports = router;
