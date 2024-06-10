const answer = require('./answers');

function errors(err, req, res, next) {
    console.log('[error', err);

    const message = err.message || 'Intern Server Error';
    const status = err.statusCode || 500;

    answer.error(req, res, message, status);
}

module.exports  =   errors;