const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

const limiter = rateLimit({
  windowMs: 10 * 1000, // 15 minutes
  max: 3, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.get("/high_score_in_chrome_dino", (req, res) => {
  res.status(200).end();
});

app.delete("/all_the_files", (req, res) => {
  res.status(200).end();
});

app.post("/the_meme_on_reddit", (req, res) => {
  res.status(200).end();
});

app.put("/grapes_in_microwave", (req, res) => {
  res.status(200).end();
});

app.listen(3000);
