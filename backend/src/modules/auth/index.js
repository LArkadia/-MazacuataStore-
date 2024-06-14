const db = require('../../db/mysql');
const ctrl = require('./auth.controller');

module.exports = ctrl(db);