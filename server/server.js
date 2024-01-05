const http = require("http");
require("dotenv").config();

const app = require("./src/app");
const connect = require("./src/db");

const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
}).of("/message");

io.on(
    "connection",
    require("./src/routes/router/conversation.router.js").sockets
);
const port = process.env.PORT || 8000;
connect(server, port);
