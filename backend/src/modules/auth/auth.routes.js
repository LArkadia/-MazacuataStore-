const express = require('express');

const answer = require('../../network/answers');
const controller    =   require('./index');

const router = express.Router();

router.get('/login', login);

async function login(req, res, next) {
    try {
        const token =   await controller.login(req.body.email, req.body.password);
        answer.success(req, res, token, 200);
    } catch (error) {
        next(error)
    }
}


module.exports  =   router;