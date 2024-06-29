const { verify } = require("../authentication");

module.exports.auth = (roles) => (req, res, next) => {
    try {
        const rawToken = req.headers['authorization'];
        if (!rawToken || !rawToken.startsWith('Bearer '))
            throw new Error('Invalid token');

        const token = rawToken.replace('Bearer ', '');
        const payload = verify(token);
        if (!roles.includes(payload.role))
            throw new Error('Forbidden');
        req.authorizer = payload;
        next();
    } catch (err) {
        console.error(err);
        res
            .status(err.message === 'Forbidden' ? 403 : 401)
            .json({message: err.message === 'Forbidden' ? err.message : 'Unauthorized'});
    }
}