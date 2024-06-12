const db = require('../../db/mysql');
const ctrl = require('../../controllers/user.controller');

module.exports = ctrl(db);