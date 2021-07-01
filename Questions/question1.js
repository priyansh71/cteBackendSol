const express = require("express");
const app = express();

app.get("/corscheck", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  });
  res.send("CORS Setup Done");
  res.status(200).end();
});

app.listen(3000);
