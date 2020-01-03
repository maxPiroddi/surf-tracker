const data = require("./destructure");

const aggregateData = async () => {
  const test = await data;
  const msw = test.mswReturn;
  const surfline = test.surflineReturn;

  const surfRating = (msw.solidRating + msw.fadedRating / 2).toFixed(1);

  const swellMinFt = ((msw.minSwell + surfline.minSwell * 3.28) / 2).toFixed(1);

  const swellMaxFt = ((msw.maxSwell + surfline.maxSwell * 3.28) / 2).toFixed(1);

  const windSpeed = ((msw.windSpeedFt + surfline.wind) / 2).toFixed(0);

  const waterTemp = ((msw.tempC + surfline.waterTemp) / 2).toFixed(0);

  const airTemp = surfline.airTemp.toFixed(0);

  // Will need to format (lowercase, capitalize front) once passed to React.
  const condition = surfline.condition;

  const boards = surfline.Boards;

  return {
    surfRating: surfRating,
    swellMinFt: swellMinFt,
    swellMaxFt: swellMaxFt,
    windSpeed: windSpeed,
    waterTemp: waterTemp,
    airTemp: airTemp,
    condition: condition,
    boards: boards
  };
};

module.exports = aggregateData;
