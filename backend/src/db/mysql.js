const mysql = require('mysql');
const config = require('../config');
const { resolve } = require('styled-jsx/css');
const { error } = require('../network/answers');
const dbconfig  =   {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;
function connectionMysql() {
    connection  =   mysql.createConnection(dbconfig);

    connection.connect((err)=>{
        if (err) {
            console.log('[db.err]', err);
            setTimeout(connectionMysql, 200);
        } else {
            console.log('DB CONNECTED!')
        }
    });

    connection.on('error', err =>{
        console.log('[db.err]', err);
        if (err.code    === 'PROTOCOL_CONNECTION_LOST') {
            connectionMysql();
        } else {
            throw err;
        }
    })
}

connectionMysql();

function all(table) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function one(table, id) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table} WHERE isbn=${id}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function addBook(table, data) {

    /*if(data){
        return insert(table, data);
    }else if(data && data.titulo){
        return update(table, data);
    }*/

    if (data) {
        return upsert(table, data);
    }
}

function upsert(table, data) {
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`
        console.log('executing query', query, 'with data:', data)
        connection.query(query, [data, data], (error, result)=>{
            if (error) {
                console.log('Error executing query: ', error);
                return reject(error);
            }
            console.log('Query executed succesfully', result);
            resolve(result);
        })
    })
}
/*function update(table, data) {
    return  new Promise((resolve, reject)=>{
      const query =   `UPDATE ${table} SET ? WHERE isbn = ?`;
      console.log('executing query', query, 'with data: ')
      connection.query(query, [data, data.isbn], (error, result) =>{
          if (error) {
              console.error('Error executing query:', error);
              return reject(error);
          }
          console.log('Query executed successfully:', result); 
          resolve(result);
      });
    });
  }
  function insert(table, data) {
    return  new Promise((resolve, reject)=>{
      const query =   `INSERT INTO ${table} SET ?`;
      console.log('executing query', query, 'with data: ')
      connection.query(query, data, (error, result) =>{
          if (error) {
              console.error('Error executing query:', error);
              return reject(error);
          }
          console.log('Query executed successfully:', result); 
          resolve(result);
      });
    });
  } */
function deleteBook(table, data) {
  return  new Promise((resolve, reject)=>{
    const query =   `DELETE FROM ${table} WHERE isbn = ?`;
    console.log('executing query', query, 'with data: ')
    connection.query(query, [data.isbn], (error, result) =>{
        if (error) {
            console.error('Error executing query:', error);
            return reject(error);
        }
        console.log('Query executed successfully:', result); 
        resolve(result);
    });
  });
}

module.exports  =   {
    all,
    one,
    addBook,
    deleteBook
}