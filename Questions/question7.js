const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

const Tom = jwt.sign({ username: "Tom"}, "ctewebd", {noTimestamp:true});

const Jerry = jwt.sign({ username: "Jerry"}, "ctewebd", {noTimestamp:true} );

const Spike = jwt.sign({ username: "Spike" }, "ctewebd" ,  {noTimestamp:true});

app.merge("/pull_request", (req, res) => {
  let token = req.headers.token;
  if (token === Tom) {
    res.status(403).end();
  } else {
    res.status(200).end();
  }
});

app.search("/repository", (req, res) => {
  let token = req.headers.token;
  if (token === Tom) {
    res.status(200).end();
  } else {
    res.status(403).end();
  }
});

app.delete("/old_files", (req, res) => {
  let token = req.headers.token;
  if (token === Spike) {
    res.status(403).end();
  } else {
    res.status(200).end();
  }
});

app.listen(3000);
