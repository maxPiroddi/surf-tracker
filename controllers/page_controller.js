const data = require("../services/aggregator");

const index = async (req, res) => {
  const surfData = await data;
  console.log(surfData.aggregateData);
  res.render("pages/dashboard");
};

const dashboard = (req, res) => {
  res.render("pages/dashboard", { user: req.user });
}

module.exports = {
  index,
  dashboard
};
