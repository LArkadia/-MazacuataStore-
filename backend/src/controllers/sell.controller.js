const TABLE =   'venta';
const auth = require('../modules/auth');
module.exports = function (dbInjected) {
    
    let db = dbInjected;
    if (!db) {
        db = require('../db/mysql');
    }
    function getAllSells() {
        return db.getSells(TABLE);
    }
    async function pointOfSale(body) {
        try {
            return db.pointOfSale(TABLE, body);
        } catch (err) {
            console.log('error in pointOfSale Controller', err);
        }
    }
    return {
        pointOfSale,
        getAllSells
    }
};