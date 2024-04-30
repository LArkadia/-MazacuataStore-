const mysql = require("mysql");

const credentials = {
  host: process.env.HOST_MYSQL || "localhost",
  user: process.env.USER_MYSQL || "user",
  password: process.env.PASS_MYSQL || "password",
  database: process.env.DB_MYSQL || "db",
};

const doQuery = async (query) => {
  const conection = mysql.createConnection(credentials);
  conection.connect();
  conection.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
  conection.end();
};

module.exports = {
  doQuery,
};
