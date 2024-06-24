const TABLE = 'usuario';
const auth = require( '../modules/auth');
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
    async function add(body) {
        try {
            const user = {
                id: body.id,
                nombre: body.nombre,
                apellidos: body.apellidos,
                tipo_usuario: body.tipo_usuario,
                direccion: body.direccion,
                rfc: body.rfc
            }
            console.log(user)
            const answer = await db.add(TABLE, user)
            var insertId = 0;
            if (body.id == 0) {
                insertId = answer.insertId;
            } else {
                insertId = body.id
            }
            
            if (body.email || body.password) {
                await auth.add({
                    id: insertId,
                    email: body.email,
                    password: body.password
                })
            }
            return true;
        } catch (err) {
            console.error('error in addUser controller', err);
        }
    }
    return {
        getAllUsers,
        getOneUser,
        deleteUser,
        add
    }
};