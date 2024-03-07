const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const initiateStkPush = require("./routes/stkpush");
const port = process.env.PORT;

app.use(
  cors({
    origin: "https://vercel.com/atuyas-projects/mpesa-client",
  })
);
app.use(express.json());
app.use("/stkpush", initiateStkPush);

app.get("/", (req, res) => {
  res.send("We Are Inside");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
