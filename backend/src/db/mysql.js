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
        console.log(err)
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
/*Generic*/
function add(table, data) {

    if (data) {
        return upsert(table, data);
    }
}
/*Generic*/
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
function getGeneric(table,params="*",data){
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT ${params} FROM ${table} WHERE ?`, data,(error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
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
        });
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
        });
    });
}

function deleteClient(table, data) {
    return  new Promise((resolve, reject)=>{
        const query =   `DELETE FROM ${table} WHERE id = ?`;
        console.log('executing query', query, 'with data: ', data);
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

/* VENTAS */

function pointOfSale(table, data) {
    
        return new Promise((resolve, reject)=>{
            const query = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`
            console.log('executing query', query, 'with data: ', data);
            connection.query(query, [data, data], (error, result)=>{
                if (error) {
                    console.error('Error executing query');
                    return reject(error);
                }
                console.log('Query executed succesfully: ', result);
                resolve(result);
            });
        });
    
}

function getSells(table) {
    return new Promise((resolve, reject)=>{
        const query = `SELECT * FROM ${table}`;
        console.log('executing query', query, 'with data: ', data);
        connection.query(query, (error, result)=>{
            return error ? reject(error)    :   resolve(result);
        })
    });
}
/* LOGIN */
function loginQuery(table, consulta) {
    return new Promise((resolve, reject) =>{
        const query = `
        SELECT a.*, u.tipo_usuario 
        FROM ${table} AS a
        LEFT JOIN usuario AS u ON a.id = u.id
        LEFT JOIN cliente AS c ON a.id = c.id
        WHERE ?
    `
        connection.query(query, consulta, (error, result)=>{
            return error ? reject(error) : resolve(result[0]);
        })
    });
}
/*Purpush*/
function getPurchasesOnStates(table,data){
    return new Promise((resolve,reject)=>{
        const query=`
        select  c.ID_compra,b.titulo,b.precio as precio_unitario,c.cantidad,(b.precio*c.cantidad) as precio_total from compra as c 
        left join libro as b ON b.isbn=c.isbn 
        left join auth  as a ON c.id_usuario=a.id
        WHERE c.estado_compra="${data.estado_compra}" AND a.email="${data.email}";
        `;
        console.log(query);
        connection.query(query,(error, result)=>{
            return error ? reject(error) : resolve(result);
        });
    });
}
function addPurchase(table,data){
 console.log(data);
    if(data){
        return upsert(table,data);
    }
}
function updatePurchase(table,data){
    if(data){
        return upsert(table,data);
    }
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
    loginQuery,
    /*Purpush*/
    getPurchasesOnStates,
    addPurchase,
    updatePurchase,   
    pointOfSale,
    getSells,
    /*Generic Query*/
    getGeneric,
}