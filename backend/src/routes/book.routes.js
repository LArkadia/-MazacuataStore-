const   {Router}    =   require("express");
const router    =   Router();
const bookController    =   require("../controllers/book.controller");

router.get("/getbooks", bookController.getAllBooks);

module.exports  =   router;