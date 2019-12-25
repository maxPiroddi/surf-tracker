const aggregateData = require("../services/aggregator");

const index = async (req, res) => {
  const data = await aggregateData();
  res.send(data);
};

const dashboard = (req, res) => {
  res.send( {user: req.user} );
};

module.exports = {
  index,
  dashboard
};
