const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require("./api");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

module.exports = app;