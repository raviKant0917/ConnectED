const express = require("express");

const router = express.Router();
const roomController = require("./../controllers/roomController");

router.route("/createRoom").post(roomController.createRoom);

router.route("/getAllRooms").get(roomController.getAllRooms);

router.route("/getRoom/:id").get(roomController.getRoomById);

router.route("/getAllMsg/:roomId").get(roomController.getAllMsg);

router.route("/createMsg").post(msgController.createMsg);

module.exports = router