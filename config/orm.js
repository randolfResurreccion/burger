
var connection = require("../config/connection.js");

// ORM

var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function (burger_name, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString,
            {
                burger_name: burger_name,
                devoured: false
            }, function (err, res) {
                if (err) {
                    throw err;
                }
                cb(res);
            });
    },

    updateOne: function (burgerID, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString,[
            {
                devoured: true
            },
            {
                id: burgerID
            }], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

};

module.exports = orm;

