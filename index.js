const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const initiateStkPush = require("./routes/stkpush");
const port = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use("/stkpush", initiateStkPush);

app.get("/", (req, res) => {
  res.send("We are inside");
});

app.post("/callback", (req, res) => {
  const callBackData = req.body.Body.stkCallback;
  if (callBackData) {
    return res.send("received transaction status");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
