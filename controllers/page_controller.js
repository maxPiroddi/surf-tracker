const StatService = require("./../services/aggregator");
const a = StatService.mswCall;
const b = StatService.surflineCall;

function index(req, res) {
  res.send({ a, b });
  // res.render("pages/home");
}

function dashboard(req, res) {
  res.render("pages/dashboard", { user: req.user });
}

module.exports = {
  index,
  dashboard
};
