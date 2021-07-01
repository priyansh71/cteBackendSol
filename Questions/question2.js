const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": ["GET", "POST", "DELETE", "PATCH", "PUT"],
  });
  let verb = req.method;
  let reverb = verb.split("").reverse().join("");
  res.send(reverb);
  next();
});

app.delete("/mirror", (req, res) => {
  res.status(200).end();
});

app.post("/mirror", (req, res) => {
  res.status(200).end();
});

app.put("/mirror", (req, res) => {
  res.status(200).end();
});

app.get("/mirror", (req, res) => {
  res.status(200).end();
});

app.patch("/mirror", (req, res) => {
  res.status(200).end();
});

app.listen(3000);
