const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/bodybuilder", (req, res, next) => {
  let value = req.headers["content-type"];
  if (value == "application/json") {
    res.setHeader("content-type", "text/plain");
    res.send(req.body.data);
    res.status(200).end();
  } else if (value == "text/plain") {
    res.setHeader("content-type", "application/json");
    res.json({ data: req.body });
    res.status(200).end();
  } else {
    next();
  }
});

app.post("/bodybuilder", upload.fields([]), (req, res) => {
  res.setHeader("content-type", "application/json");
  res.json({ data: req.body.data });
  res.status(200).end();
});

app.listen(3000);
