const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const rotas = require("./rotas.js")

app.use(bodyParser.json());

app.use("/compras", rotas);

app.listen(3000);

module.exports = app
