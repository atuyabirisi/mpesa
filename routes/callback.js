const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    callBackData = req.body;
    return res.send(callBackData);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
