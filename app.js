const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/clientes", (req, res) => {
  res.send("clientes de la aplicación");
});

app.get("/productos", (req, res) => {
    res.send("clientes de productos");
  });

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
