const TABLE = 'usuario';

module.exports =  function(dbInjected){

    let db = dbInjected;
    if (!db) {
        db = require('../db/mysql');
    }
    function getAllUsers(){
        return db.allUsers(TABLE);
    }
    function getOneUser(id) {
        return db.oneUser(TABLE, id);
    }
    function deleteUser(body) {
        try {
            return db.deleteUser(TABLE, body);
        } catch (err) {
            console.error('error in deleteUser controller', err);
        }
    }
    function addUser(body) {
        try {
            return db.addUser(TABLE, body)
        } catch (err) {
            console.error('error in addUser controller', err);
        }
    }
    return {
        getAllUsers,
        getOneUser,
        deleteUser,
        addUser
    }
};