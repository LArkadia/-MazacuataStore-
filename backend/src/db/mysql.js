const mysql = require('mysql');
const config = require('../config');
const { resolve } = require('styled-jsx/css');
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
            if(error) return reject(error);
            resolve(result);
        })
    });
}
function one(table, id) {
    
}
function add(table, data) {
    
}
function deleted(table, id) {
    
}

module.exports  =   {
    all,
    one,
    add,
    deleted
}