const express = require("express");
const morgan = require("morgan");
const config = require("./config");
const cors = require('cors');

const books = require("./routes/book.routes");
const sales = require("./routes/sell.routes"); 
const users = require("./routes/user.routes");
const clients = require("./routes/client.routes");
const auth = require("./modules/auth/auth.routes");
const purchases=require("./routes/purchase.routes");

//Errors
const error = require('./network/error')

const app = express();
//Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config
app.set("port", config.app.port);
//rutas
app.use("/api/books", books);
app.use("/api/users", users);
app.use("/api/clients", clients);
app.use("/api/auth", auth);

app.use("/api/purchase",purchases)

app.use("/api/pointOfSale", sales);

app.use(error);
module.exports = app;
