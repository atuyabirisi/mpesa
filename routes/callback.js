const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const callBackData = req.body;
  console.log(callBackData);
});

module.exports = router;
