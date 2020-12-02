var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD

});

connection.connect(()=>{
    console.log("Database Connected..");
});


module.exports = connection;
