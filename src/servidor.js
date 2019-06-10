const express = require("express");
const path = require("path");

const PORT = 3000;
var app = express();

const directorio_publico = path.join(__dirname, "../public");

app.use(express.static(directorio_publico));

app.listen(PORT, () => {
  console.log(">> inicio servidor express port:" + PORT);
});

module.exports = { app, path };
