const express = require("express");
const router = express.Router();

router.post("/callback", (req, res) => {
  const response = req.body;
  console.log(response);
});
