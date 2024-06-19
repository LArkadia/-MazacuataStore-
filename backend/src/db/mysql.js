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
    console.log(dbconfig);
    connection  =   mysql.createConnection(dbconfig);
    console.log(connection);
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
/* LIBROS */
function all(table) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function one(table, title) {
    return new Promise((resolve, reject)=>{
        const decodedTitle = decodeURIComponent(title);
        connection.query(`SELECT * FROM ${table} WHERE titulo='${decodedTitle}'`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function top(table,orderBy){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table} ORDER BY ${orderBy} DESC LIMIT 4`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function addBook(table, data) {

    if (data) {
        return upsert(table, data);
    }
}
function add(table, data) {

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

/* USERS */
function allUsers(table) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function oneUser(table, id) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function addUser(table, data) {

    if (data) {
        return upsertUser(table, data);
    }
}

function upsertUser(table, data) {
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`
        console.log('executing query', query, 'with data: ', data)
        connection.query(query, [data, data], (error, result)=>{
            if (error) {
                console.log('Error executing query: ', error);
                return reject(error);
            }
            console.log('Query executed succesfully', result);
            resolve(result);
        });
    });
}

function deleteUser(table, data) {
  return  new Promise((resolve, reject)=>{
    const query =   `DELETE FROM ${table} WHERE id = ?`;
    console.log('executing query', query, 'with data: ', data)
    connection.query(query, [data], (error, result) =>{
        if (error) {
            console.error('Error executing query:', error);
            return reject(error);
        }
        console.log('Query executed successfully:', result); 
        resolve(result);
    });
  });
}

/* CLIENTS */
function allClients(table) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function oneClient(table, id) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
function addClient(table, data) {

    if (data) {
        return upsertClient(table, data);
    }
}

function upsertClient(table, data) {
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`
        console.log('executing query', query, 'with data: ', data)
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

function deleteClient(table, data) {
  return  new Promise((resolve, reject)=>{
    const query =   `DELETE FROM ${table} WHERE id = ?`;
    console.log('executing query', query, 'with data: ', data)
    connection.query(query, [data], (error, result) =>{
        if (error) {
            console.error('Error executing query:', error);
            return reject(error);
        }
        console.log('Query executed successfully:', result); 
        resolve(result);
    });
  });
}

/* LOGIN */
function loginQuery(table, consulta) {
    return new Promise((resolve, reject) =>{
        const query = `SELECT * FROM ${table} AS a INNER JOIN usuario AS u ON a.id = u.id WHERE ?`
        connection.query(query, consulta, (error, result)=>{
            return error ? reject(error) : resolve(result[0]);
        })
    });
}
module.exports  =   {
    all,
    one,
    top,
    addBook,
    add,
    deleteBook,
    allUsers,
    oneUser,
    addUser,
    upsertUser,
    deleteUser,
    allClients,
    oneClient,
    deleteClient,
    addClient,
    loginQuery
}