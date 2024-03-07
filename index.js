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

app.listen(port, () => console.log(`Listening on port ${port}`));
