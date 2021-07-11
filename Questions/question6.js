const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const parser = require("body-parser");
const date = new Date();
const time = date.getTime();

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

app.use(parser.json());

app.post("/login", (req, res) => {
  if (
    req.body.email == "mymail@pigeonmail.com" &&
    req.body.password == "pigeons_are_FBI_agents"
  ) {
    const token = jwt.sign(
      { email: "mymail@pigeonmail.com", date: time },
      "amaze"
    );
    res.send(token);
    res.status(200).end();
  } else {
    res.status(401).end();
  }
});

app.get("/getbankbalance", (req, res) => {
  let webT = req.headers.token;
  let token = jwt.sign({ email: "mymail@pigeonmail.com", date: time }, "amaze");
  if (webT === token) {
    res.send("0");
    res.status(200).end();
  } else {
    res.status(401).end();
  }
});

app.listen(4000);
