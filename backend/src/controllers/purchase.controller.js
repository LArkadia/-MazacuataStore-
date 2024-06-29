const purpush = require('../modules/purpush');
const auth = require('../modules/auth');
const TABLE = 'Compra';

module.exports =  function(dbInjected){

    let db = dbInjected;
    if (!db) {
        db = require('../db/mysql');
    }
    function verifyToken(token){
        if(!token)return false;
        if(!verify(token))return false;
        return true;
    }
    function getCanceledPurpushs(data){
        data['estado_compra']='cancelada';
        return db.getPurchasesOnStates(TABLE,data);
    }
    function getActivePurpushs(data){
        data['estado_compra']='pendiente';
        console.log(data);
        return db.getPurchasesOnStates(TABLE,data);
    }
    function getCompletedPurpushs(data){
        data['estado_compra']='completada';
        return db.getPurchasesOnStates(TABLE,data);
    }
    function setCompletedPurpush(data){
        data['estado_compra']='completada';
        return db.updatePurchase(TABLE,data);
    }
    function setCanceledPurpush(data){
        data['estado_compra']='cancelada';
        return db.updatePurpush(TABLE,data);
    }
    function registerPurpush(data){
        data['estado_compra']='pendiente';
        return db.addPurchase(TABLE,data);
    }   
    return {
        getActivePurpushs,
        getCanceledPurpushs,
        getCompletedPurpushs,
        setCompletedPurpush,
        setCanceledPurpush,
        registerPurpush,
    }
};