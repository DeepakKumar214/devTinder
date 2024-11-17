const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from server:)");
});

app.use("/hello", (req, res) => {
  res.send("hello hello heloo");
});

app.use("/", (req, res) => {
  res.send("Hello fron dev tinder ");
});

app.listen(3000, () => {
  console.log("sucessfully liting on port 3000 :)");
});
