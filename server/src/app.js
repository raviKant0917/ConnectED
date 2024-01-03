const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(helmet());
app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());

app.use("/users", require("./routes/router/user.router.js"));
app.use("/products", require("./routes/router/product.router.js"));

module.exports = app;
