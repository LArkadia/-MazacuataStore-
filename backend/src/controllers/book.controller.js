/*const bookService   =   require("../services/book.service");*/
const db =  require('../db/mysql')

const TABLE =   'libro';
function getAllBooks() {
    return db.all(TABLE);
}

module.exports  =   {
    getAllBooks,
};