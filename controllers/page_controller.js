const aggregateData = require("../services/aggregator");

const index = async (req, res) => {
  const data = await aggregateData();
  res.send(data);
};

const dashboard = (req, res) => {
  res.render("pages/dashboard", { user: req.user });
};

module.exports = {
  index,
  dashboard
};
