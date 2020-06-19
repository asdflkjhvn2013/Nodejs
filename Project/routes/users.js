var express = require("express");
var router = express.Router();
var usersJSON = require("../models/users.json");

/* GET users listing. */
router.get("/", function(req, res, next) {
    console.log(usersJSON.body);
    res.render("users", { users: usersJSON.body, layout: "index" });
});

module.exports = router;