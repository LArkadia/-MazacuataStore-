const express = require('express');

const answer = require('../../network/answers');
const controller = require('./index');

const router = express.Router();

router.post('/login', login);

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const token = await controller.login(email, password);
        answer.success(req, res, token, 200);
    } catch (error) {
        next(error);
    }
}

module.exports = router;
