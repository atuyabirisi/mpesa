const axios = require("axios");

const generateTokenMiddleWare = async (req, res, next) => {
  const secretKey = process.env.CONSUMER_SECRET;
  const consumerKey = process.env.CONSUMER_KEY;

  const auth = btoa(`${consumerKey}:${secretKey}`);
  await axios
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((data) => {
      token = data.data.access_token;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = generateTokenMiddleWare;
