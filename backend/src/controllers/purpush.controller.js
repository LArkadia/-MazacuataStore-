const purpush = require('../modules/purpush');
const auth = require('../modules/auth');
const TABLE = 'cliente';

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
        data['estado']='cancelada';
        return db.getPurpushsOnEstates(TABLE,data);
    }
    function getActivePurpushs(data){
        data['estado']='pendiente';
        console.log(data);
        return db.getPurpushsOnEstates(TABLE,data);
    }
    function getCompletedPurpushs(data){
        data['estado']='completada';
        return db.getPurpushsOnEstates(TABLE,data);
    }
    function setCompletedPurpush(data){
        data['estado']='completada';
        return db.updatePurpush(TABLE,data);
    }
    function setCanceledPurpush(data){
        data['estado']='cancelada';
        return db.updatePurpush(TABLE,data);
    }
    function registerPurpush(data){
        data['estado']='pendiente';
        return db.addPurpush(TABLE,data);
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