// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {


  app.get("/", function (req, res) {
    res.render("index");
  });
  //get the login page
  app.get("/login", function (req, res) {
    res.render("login");
  });
  //get the about page
  app.get("/about", function (req, res) {
    res.render("about");
  });
  //get the sign up page
  app.get("/projects", function (req, res) {
    res.render("projects");
  });
  app.get("/contact", function (req, res) {
    res.render("contact");
  });
};