const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hi there");
});

app.listen(5656, () => {
  console.log("Listen on the port 5656...");
});
