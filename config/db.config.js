'use strict';
const env = require('dotenv').config();
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;