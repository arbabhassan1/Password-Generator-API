const express = require("express");
const cors = require("cors");
var generator = require("generate-password");

const app = express();
app.use(app.cors());
const port = 8686;
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server is Running on active port no:" + port);
});

app.get("/password", (req, res) => {
  let {
    length,
    numbers,
    uppercase,
    lowercase,
    symbols,
    excludeSimilarCharacters,
    strict,
  } = req.query;

  var password = generator.generate({
    length: length,
    numbers: numbers,
    uppercase: uppercase,
    lowercase: lowercase,
    symbols: symbols,
    excludeSimilarCharacters: excludeSimilarCharacters,
    strict: strict,
  });

  const resData = {
    password: password,
    length: length,
    API: "Password Generator API",
    Developer: "Arbab Hassan",
    contact: "https://bit.ly/arbab-hassan",
  };

  res.json(resData);
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
