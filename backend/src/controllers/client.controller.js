const TABLE = 'cliente';

module.exports =  function(dbInjected){

    let db = dbInjected;
    if (!db) {
        db = require('../db/mysql');
    }
    function getAllClients(){
        return db.allUsers(TABLE);
    }
    function getOneClient(id) {
        return db.oneUser(TABLE, id);
    }
    function deleteClient(body) {
        try {
            return db.deleteUser(TABLE, body);
        } catch (err) {
            console.error('error in deleteClient controller', err);
        }
    }
    function addClient(body) {
        try {
            return db.addUser(TABLE, body)
        } catch (err) {
            console.error('error in addClient controller', err);
        }
    }
    return {
        getAllClients,
        getOneClient,
        deleteClient,
        addClient
    }
};