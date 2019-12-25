const apiDataSets = require("./api_call");

const destruct = (async () => {
  const {
    fadedRating,
    solidRating,
    swell,
    wind,
    condition
  } = await apiDataSets.mswCall();
  const { spot, forecast } = await apiDataSets.surflineCall();

  const mswReturn = {
    dataSource: "MSW",
    fadedRating: fadedRating,
    solidRating: solidRating,
    minSwell: swell.absMinBreakingHeight,
    maxSwell: swell.absMaxBreakingHeight,
    windSpeedFt: wind.speed,
    tempC: condition.temperature
  };
  const surflineReturn = {
    dataSource: "Surfline",
    Boards: spot.boardTypes,
    wind: forecast.wind.speed,
    minSwell: forecast.waveHeight.min,
    maxSwell: forecast.waveHeight.max,
    waterTemp: forecast.waterTemp.max,
    airTemp: forecast.weather.temperature,
    condition: forecast.weather.condition
  };
  return { mswReturn, surflineReturn };
})();

module.exports = destruct;