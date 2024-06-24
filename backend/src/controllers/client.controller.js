const user = require('../modules/user');
const auth = require('../modules/auth')
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
    async function addClient(body) {
        try {
            const client = {
                id: body.id,
                nombre: body.nombre,
                apellidos: body.apellidos,
                tipo_usuario: body.tipo_usuario,
                direccion: body.direccion,
                rfc: body.rfc
            }
            console.log(client);
            const answer =  await db.addClient(TABLE, client);
            var insertId = 0;
            if (body.id == 0) {
                insertId    =   answer.insertId;
            }else{
                insertId    =   body.id
            }
            if (body.email || body.password) {
                await auth.add({
                    id: insertId,
                    email: body.email,
                    password: body.password
                });
            }

            return true;
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