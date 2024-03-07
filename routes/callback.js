const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    callBackData = req.body;
    return res.sendStatus(200).send(callBackData);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
