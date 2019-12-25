const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");

const registerNew = (req, res) => {
  res.render("authentication/register"); //Figure once FrontEnd is functional
};

const registerCreate = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.create({ email, password });

  req.login(user, error => {
    if (error) {
      return next(error);
    }
    res.redirect("/dashboard");
  });
};

const loginNew = (req, res) => {
  res.render("authentication/login");
};

const loginCreate = async (req, res) => {
  const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
  res.cookie("jwt", token);
  res.redirect("/dashboard");
};

const logout = (req, res) => {
  req.logout(); // Here we have a hot passport method that removes the requirement to destroy the session.
  res.cookie("jwt", null, { maxAge: -1 }); //Only way to delete a cookie is to put it in the past
  res.redirect("/");
};

module.exports = {
  registerNew,
  registerCreate,
  loginNew,
  loginCreate,
  logout
};
