const express = require("express");
const app = express();

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, "0");
let date = dd + mm + yyyy;

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

app.get("/hungry/pizza", (req, res) => {
  res.status(200).end();
});
app.post("/hungry/pizza", (req, res) => {
  let pizza = req.headers.pizza;
  let Arr5 = [];
  let Arrl = pizza.split("");
  for (var i = 0; i < 5; i++) {
    Arr5.push(Arrl[i]);
  }
  let pizza5 = Arr5.join("");
  res.set("order", date + pizza5);
  res.status(201).end();
});

app.listen(3000);
