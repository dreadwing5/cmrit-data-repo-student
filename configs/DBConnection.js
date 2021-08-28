const mysql = require("mysql2");
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "data_repository_student",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = connection;
