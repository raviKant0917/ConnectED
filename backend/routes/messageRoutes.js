const express = require("express");

const router = express.Router();

const msgController = require("./../controllers/messageController");

router.route("/getAllMsg/:roomId").get(msgController.getAllMsg);

router.route("/createMsg").post(msgController.createMsg);

module.exports = router
