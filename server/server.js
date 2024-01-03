const http = require("http");
require("dotenv").config();
const app = require("./src/app");
const connect = require("./src/db");

const server = http.createServer(app);
const port = process.env.PORT || 8000;
connect(server, port);
