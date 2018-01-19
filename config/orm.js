
var connection = require("../config/connection.js");

// HELPER FUNCTION FOR SQL SYNTAX
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

// ORM

var orm = {

    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

        console.log(queryString);

        connection.query(queryString, function(err, res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });    
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;

