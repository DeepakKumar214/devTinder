const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({
    userName: "Deepak",
    lastname: "dubey",
  });
});

app.post("/user", (req, res) => {
  //logic to save user details in to database
  res.send("User details haas been saved into DB ");
});

app.delete("/user", (req, res) => {
  res.send("user data deleted");
});

//this will match all HTTP methods calls
app.use("/test", (req, res) => {
  res.send("Hello from server:)");
});

app.listen(3000, () => {
  console.log("sucessfully liting on port 3000 :)");
});
