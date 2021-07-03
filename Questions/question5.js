const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": ["OPTIONS", "GET", "POST", "DELETE", "PUT"],
  });
  console.log(req.method);
  next();
});

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 3,
});

// app.use(limiter);

app.get("/high_score_in_chrome_dino", limiter, (req, res) => {
  res.status(200).end();
});

app.delete("/all_the_files", limiter, (req, res) => {
  res.status(200).end();
});

app.post("/the_meme_on_reddit", limiter, (req, res) => {
  res.status(200).end();
});

app.put("/grapes_in_microwave", limiter, (req, res) => {
  res.status(200).end();
});

app.listen(3000);