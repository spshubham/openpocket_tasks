"use strict";
const express = require("express")
const app = express();
const http = require("http");
const port = 3000
const userRouter = require("./routers");

app.use("/", userRouter);

app.use("*", function (req, res) {
    res.status(404).send({
      error: "Resource not found"
    });
  });



http.createServer(app).listen(port, function () {
    console.log("Express server listening on port " + port);
  });
  