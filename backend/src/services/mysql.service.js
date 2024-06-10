const mysql = require("mysql");
let dbname="mazacuatastore",password="mrtetas"
const credentials = {
  host: process.env.HOST_MYSQL || "localhost",
  user: process.env.USER_MYSQL || "root",
  password: process.env.PASS_MYSQL || password,
  database: process.env.DB_MYSQL || dbname,
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
