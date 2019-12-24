const apiDataSets = require("./api_call");

const destruct = (async () => {
  const {
    fadedRating,
    solidRating,
    swell,
    wind,
    condition
  } = mswData[x];
  const mswData = await apiDataSets.mswCall(); // Returns full MSW call
  
  const currentTime = Math.round((new Date()).getTime() / 1000);
  console.log(currentTime);
  // 1. Put timestamps in array, find closest using haystack
  // 2. Destructure as "Current Conditions"
  // 3. Destructure objects 8-40 as 'weekly forecast'
      // 3.1 - Destruct. timestamp, min/max swell, wind speed & pressure












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