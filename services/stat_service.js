const axios = require("axios");

const mswCall = async () => {
  const magicSeaWeed = await axios.get(
    `http://magicseaweed.com/api/${process.env.MSW_KEY}/forecast/?spot_id=996`
  );
  return magicSeaWeed;
};

const surflineCall = async () => {
  // Surfline has a public API, and as such does not require any keys to be passed, simply a 'spotId'.
  const surfline = await axios.get(
    "https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a7708bf8"
  );
  return surfline;
};



module.exports = {
  mswCall,
  surflineCall
};
