const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const initiateStkPush = require('./routes/stkpush')
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/stkpush', initiateStkPush);

app.listen(port, () => console.log(`Listening on port ${port}`));