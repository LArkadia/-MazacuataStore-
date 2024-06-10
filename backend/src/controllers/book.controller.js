/*const bookService   =   require("../services/book.service");*/
const db =  require('../db/mysql')

const TABLE =   'libro';

function getAllBooks() {
    return db.all(TABLE);
}

function one(isbn) {
    return db.one(TABLE, isbn);
}

async function deleteBook(body) {
    console.log(body)
    try {
        return db.deleteBook(TABLE, body);
    } catch (err) {
        console.error('error in deletebook controller', err)
    }
}

function addBook(body) {
    return db.addBook(TABLE, body);
}
module.exports  =   {
    getAllBooks,
    one,
    deleteBook,
    addBook
};