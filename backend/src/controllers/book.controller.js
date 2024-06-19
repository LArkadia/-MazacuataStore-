/*const bookService   =   require("../services/book.service");*/
const db =  require('../db/mysql')

const TABLE =   'libro';

function getAllBooks() {
    return db.all(TABLE);
}

function one(title) {
    return db.one(TABLE, title);
}
function selectTop(orderBy){
    return db.top(TABLE,orderBy);
}
async function deleteBook(body) {
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
    selectTop,
    deleteBook,
    addBook
};