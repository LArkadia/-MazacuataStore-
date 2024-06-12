const db = require('../../db/mysql');
const ctrl = require('../../controllers/client.controller');

module.exports = ctrl(db);