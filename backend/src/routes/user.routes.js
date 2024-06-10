const express = require("express");
const router = express.Router();
const answer = require("../network/answers");
const userController = require("../controllers/user.controller");

router.get("/", allUsers);
router.get("/:id", oneUser);
router.put("/", deleteUser);
router.post("/", addUser);

async function allUsers(req, res) {
    try {
        const items = await userController.getAllUsers();
        answer.success(req, res, items, 200);
    } catch (err) {
        answer.error(req, res, err, 500);
    }
}

async function oneUser(req, res) {
    try {
        const items = await userController.getOneUser(req.params.id);
        answer.success(req, res, items, 200);
    } catch (err) {
        answer.error(req, res, err, 500);
    }
}

async function deleteUser(req, res, next) {
    try {
        const items = await userController.deleteUser(req.body.id);
        answer.success(req, res, 'User deleted!', 200);
    } catch (err) {
        next(err);
    }
}

async function addUser(req, res, next) {
    try {
        const items = await userController.addUser(req.body);
        answer.success(req, res, 'User added!', 201);
    } catch (err) {
        next(err);
    }   
}

module.exports  =   router;