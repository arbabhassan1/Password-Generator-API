const express = require("express");
// var generator = require("generate-password");

const app = express();

const port = 8686;
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server is Running on active port no:" + port);
});

app.post("/password", (req, res) => {
  console.log(req.body);
  let {
    length,
    numbers,
    uppercase,
    lowercase,
    symbols,
    excludeSimilarCharacters,
    strict,
  } = req.body;

  res.json(req.body);
  console.log(length);
});

app.get("*", (req, res) => {
  content = {
    error: "404 NOT Found",
    developer: "Arbab Hassan",
    license: "MIT",
    contact: "https://bit.ly/arbab-hassan",
  };

  res.json(content);
});
