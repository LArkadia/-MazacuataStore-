const express = require("express");
const cors=require("cors");
const router = express.Router();
const answer = require("../network/answers");
const bookController = require("../controllers/book.controller");
const { auth } = require("../middleware/auth");

var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}
router.use(auth(['admin']));
router.get("/", cors(corsOptions),allBooks);
router.get("/single/:isbn", one);
router.get("/top",cors(corsOptions),top)
router.put("/", deleteBook);
router.post("/", addBook);


async function allBooks(req, res) {
  const items = await bookController.getAllBooks();
  answer.success(req, res, items, 200);
}

async function one(req, res) {
  try {
    const items = await bookController.one(req.params.isbn);
    answer.success(req, res, items, 200);
  } catch (err) {
    answer.error(req, res, err, 500);
  }
}
async function top(req,res){
  try{
    console.log("top")
    const items = await bookController.selectTop("precio");
    answer.success(req, res, items, 200);
  }
  catch(err){
    answer.error(req, res, err, 500);
  }
}

async function deleteBook(req, res, next) {
  try {
    const items = await bookController.deleteBook(req.body);
    answer.success(req, res, "Book Deleted!", 200);
  } catch (err) {
    next(err);
  }
}

async function addBook(req, res, next) {
  try {
    console.log(req.body)
    const items = await bookController.addBook(req.body);
    if (req.body.id == 0) {
      message = 'Book saved'
    } else {
      message = 'Book Saved'
    }
    answer.success(req, res, message, 201);
  } catch (err) {
     next(err);
  }
}

async function updateBook(req, res, next) {
  try {
    const items = await bookController.addBook(req.body);
    answer.success(req, res, 'Book Updated', 200);
  } catch (err) {
    next(err);
  }
}
module.exports = router;
