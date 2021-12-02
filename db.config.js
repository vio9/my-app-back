const mysql = require("mysql");

// Setup database connection
const connection = mysql.createConnection({
	host: process.env.DB_HOST, // db server address
	user: process.env.DB_USER, // db user's name
	database: process.env.DB_NAME, // db name
});

module.exports = connection;
