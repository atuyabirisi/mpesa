const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const response = req.body;
  console.log(response);
});

module.exports = router;
