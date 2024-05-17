const { Router } = require("express");
const router = Router();
const controller = require("../controllers/v1.controller");

router.get("/helloUser", controller.hello);

module.exports = router;
