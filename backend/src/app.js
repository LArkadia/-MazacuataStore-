const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const books = require("./routes/book.routes");
//const { error } = require("./network/answers");

const error = require('./network/error')

const app = express();
//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config
app.set("port", config.app.port);
//rutas
app.use("/api/books", books);
app.use(error);
module.exports = app;
