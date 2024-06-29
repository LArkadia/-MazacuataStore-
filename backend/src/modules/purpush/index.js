const db = require('../../db/mysql');
const ctrl = require('../../controllers/purchase.controller');

module.exports = ctrl(db);