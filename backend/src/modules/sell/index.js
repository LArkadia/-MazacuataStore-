const db = require('../../db/mysql');
const ctrl = require('../../controllers/sell.controller');

module.exports = ctrl(db);