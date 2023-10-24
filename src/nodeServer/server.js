const express = require("express");
const path = require("path");
const fs = require("fs");

const server = express();
const PORT = 3000;

server.use(express.json());

server.get("", (req, res) =>{
    res.send()
});

server.listen(3000);