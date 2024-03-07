const express = require('express');
const router = express.Router();
const axios = require('axios');
const generateTokenMiddleWare = require('../middleware/generateToken');

router.post('/', generateTokenMiddleWare, async(req, res) => {
    const phone1 = req.body.phone;
    const phone = phone1.substring(1)
    const amount = req.body.amount;
    const date = new Date();
    const shortCode = process.env.SHORTCODE;
    const passKey = process.env.PASSKEY;
    const timestamp = 
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) + 
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);
    const password = btoa(shortCode + passKey + timestamp);

    await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {    
        BusinessShortCode: shortCode,    
        Password: password,    
        Timestamp: timestamp,    
        TransactionType: "CustomerBuyGoodsOnline",    
        Amount: amount,    
        PartyA:`254${phone}`,    
        PartyB: shortCode,    
        PhoneNumber:`254${phone}`,    
        CallBackURL: "https://mydomain.com/pat",    
        AccountReference: `254${phone}`,    
        TransactionDesc:"Test"
     },
     {
        headers: {
            Authorization: `Bearer ${token}`,
        },
     })
     .then(res => {
        response = res.data;
     })
     .catch(err => {
        console.log(err);
        res.status(400).send(err);
     });
     res.send(response);
});

module.exports = router;