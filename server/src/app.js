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
app.use("/transaction", require("./routes/router/transaction.router.js"));

module.exports = app;

// user -> register, login, change password, forgot password, change details
// product -> getProducts, getProductById, change Product Detail, Delete Product
// Rating -> give a rating
// Transaction
// Chat

//TODO
// Product -> Related Topics, available
// Transaction -> Date
// User -> phone Number, profile Image
// Chat
