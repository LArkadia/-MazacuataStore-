const mysql = require("mysql");

const credentials = {
  host: process.env.HOST_MYSQL || "localhost",
  user: process.env.USER_MYSQL || "root",
  password: process.env.PASS_MYSQL || "JayAndY;ePar1s",
  database: process.env.DB_MYSQL || "mazacuatastore",
};

const doQuery = async (query) => {
  return new Promise((resolve, reject) =>{
    const connection = mysql.createConnection(credentials);
    connection.connect();
    
    connection.query(query, function (error, results, fields) {
      if (error) reject(error);
      resolve(results)
    });
    connection.end();
  });
};

module.exports = {
  doQuery,
};
