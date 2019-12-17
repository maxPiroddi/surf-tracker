const StatService = require("./../services/stat_service");

function index(req, res) {
  res.render("pages/home");
}

function dashboard(req, res) {
  res.render("pages/dashboard", { user: req.user });
}

module.exports = {
  index,
  dashboard
};
