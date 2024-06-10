const db = require('../db/mysql')

const TABLE = 'usuario';

function getAllUsers() {
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

module.exports = {
    getAllUsers,
    getOneUser,
    deleteUser,
    addUser
};