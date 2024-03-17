const express = require("express");
const app = express();

const port = 8181;
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("Server is Running on active port no:" + port);
});

app.use("/", (req, res) => {
  res.send("ok");
});
