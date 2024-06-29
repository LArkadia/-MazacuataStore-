const db = require('../../db/mysql');
const ctrl = require('../../controllers/purpush.controller');

module.exports = ctrl(db);