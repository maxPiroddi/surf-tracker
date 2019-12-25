const axios = require("axios");
require("dotenv").config();

const mswCall = async () => {
  const magicSeaWeed = await axios.get(
    //16e56a3491acb58f5af051b9dd92e9f8
    // process.env doesn't seem to be working? Attempting to fix this now
    `http://magicseaweed.com/api/16e56a3491acb58f5af051b9dd92e9f8/forecast/?spot_id=996`
  );
  // console.log(magicSeaWeed.data);
  return magicSeaWeed.data[0];
};

// Surfline is primarily used for up-to-date data, as their API does not return longer forecasts
const surflineCall = async () => {
  // Surfline has a public API, and as such does not require any keys to be passed, simply a 'spotId'.
  const surfline = await axios.get(
    "https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a7708bf8"
  );
  // console.log(surfline.data);
  return surfline.data;
};

module.exports = {
  mswCall,
  surflineCall
};
