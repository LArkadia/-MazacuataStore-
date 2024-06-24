const express = require("express");
const router = express.Router();
const answer = require("../network/answers");
const userController = require("../modules/client/index");
const { auth } = require("../middleware/auth");

router.post("/", addClient);
router.use(auth(['admin']));
router.get("/", allClients);
router.get("/:id", oneClient);
router.put("/", deleteClient);


async function allClients(req, res) {
    try {
        const items = await userController.getAllClients();
        answer.success(req, res, items, 200);
    } catch (err) {
        answer.error(req, res, err, 500);
    }
}

async function oneClient(req, res) {
    try {
        const items = await userController.getOneClient(req.params.id);
        answer.success(req, res, items, 200);
    } catch (err) {
        answer.error(req, res, err, 500);
    }
}

async function deleteClient(req, res, next) {
    try {
        const items = await userController.deleteClient(req.body.id);
        answer.success(req, res, 'Client deleted!', 200);
    } catch (err) {
        next(err);
    }
}

async function addClient(req, res, next) {
    try {
        const items = await userController.addClient(req.body);
        answer.success(req, res, 'Client added!', 201);
    } catch (err) {
        next(err);
    }   
}

module.exports  =   router;