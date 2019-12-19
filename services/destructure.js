const dataSets = require("./api_call");

module.exports = (async () => {
  const {
    fadedRating,
    solidRating,
    swell,
    wind,
    condition
  } = await dataSets.mswCall();
  const { spot, forecast } = await dataSets.surflineCall();

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
    airTemp: forecast.weather.temperature
  };
  return { mswReturn, surflineReturn };
})();
