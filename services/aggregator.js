const data = require("./destructure");

const aggregateData = async () => {
  const test = await data;
  const msw = test.mswReturn;
  const surfline = test.surflineReturn;

  const surfRating = msw.solidRating - msw.fadedRating / 2;
  // console.log(`Surf Rating: ${surfRating}/5`);

  const swellMinFt = ((msw.minSwell + surfline.minSwell * 3.28) / 2).toFixed(1);
  // console.log(`Swell Min: ${swellMinFt}ft`);

  const swellMaxFt = ((msw.maxSwell + surfline.maxSwell * 3.28) / 2).toFixed(1);
  // console.log(`Swell Max: ${swellMaxFt}ft`);

  const windSpeed = ((msw.windSpeedFt + surfline.wind) / 2).toFixed(0);
  // console.log(`Wind Speed: ${windSpeed}mph`);

  const waterTemp = (msw.tempC + surfline.waterTemp) / 2;
  // console.log(`Water Temp: ${waterTemp}'C`);

  const airTemp = surfline.airTemp;
  // console.log(`Air Temp: ${airTemp}'C`);

  const boards = surfline.Boards;
  // console.log(`Recommended Boards: ${boards}`);

  return {
    surfRating: surfRating,
    swellMinFt: swellMinFt,
    swellMaxFt: swellMaxFt,
    windSpeed: windSpeed,
    waterTemp: waterTemp,
    airTemp: airTemp,
    boards: boards
  };
};

module.exports = aggregateData;