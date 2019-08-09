const express = require("express");

const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose.connect('mongodb+srv://isaiasOminostack:isaias123@cluster0-sjojk.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json());

server.use(routes);

server.listen(3333);
