"use strict";
const express = require("express");
const path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "/dist")));

app.get("/*", function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/dist") });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
