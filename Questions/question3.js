const express = require("express");
const app = express();

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, "0");
let date = dd + mm + yyyy;

app.use("/hungry/pizza", (req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers": "*",
    /* Expose headers makes the header sent by the server 'available' on the front-end. */
  });
  next();
});

app.get("/hungry/pizza", (req, res) => {
  let pizza = req.headers.pizza.substr(0, 5);
  res.set({ order: date + pizza });
  res.status(200).end();
});

app.listen(3000);
