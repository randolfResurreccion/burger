
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/index", function(req, res){
    burger.selectAll(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/burgers/create", function(req, res){
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

router.put("'/burgers/eat/:id", function(req, res) {
    burger.update(req.params.id, function(){
        res.redirect("/index")
    });
});

module.exports = router;