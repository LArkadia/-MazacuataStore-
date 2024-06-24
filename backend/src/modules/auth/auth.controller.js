const TABLE =   'auth';
const auth = require('../../authentication');
const bcrypt = require('bcrypt');
module.exports  =   function (dbInjected) {
    let db  =   dbInjected;

    if (!db) {
        db  =   require('../../db/mysql');
    }

    async function login(email, password) {
        const data = await db.loginQuery(TABLE, {email: email});

        return bcrypt.compare(password, data.password)
                .then(result => {
                    if (result === true) {
                        /* Building Token */
                        return auth.tokenAssignation({
                            id: data.id,
                            email: data.email,
                            role: data.tipo_usuario
                        });
                    } else {
                        throw new Error('Invalid Information');
                    }
                }
                )
    }

    async function add(data) {
        const authData  =   {
            id: data.id,
        }
        if (data.email) {
            authData.email = data.email;
        }
        if (data.password) {
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }

        return db.add(TABLE, authData);
    }
    
    return {
        add,
        login
    }
}