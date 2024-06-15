const jwt = require('jsonwebtoken');
config = require('../config')

const secret = config.jwt.secret;

function tokenAssignation(data) {
    return jwt.sign(data, secret);
}

module.exports = {
    tokenAssignation
}