const express = require('express')
const router    =   express.Router();
const answer =  require('../network/answers')
const bookController    =   require("../controllers/book.controller");

router.get("/getbooks", function (req, res) {
    /*res.send('books ok');*/
    const all = bookController.getAllBooks()
    .then((item)=>{
        answer.success(req, res, item, 200);
    })
});

module.exports  =   router;