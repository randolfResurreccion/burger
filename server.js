
var express = require("express");
var bp = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(bp.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("listening at localhost: " + PORT);
})