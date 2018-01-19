
var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers")
})