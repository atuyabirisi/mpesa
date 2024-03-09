const express = require("express");
const parser = require("body-parser");
const router = express.Router();

router.use(parser.json());
router.post("/", (req, res) => {
  const callBackData = req.body.Body;
  res.send(callBackData);
});

module.exports = router;
