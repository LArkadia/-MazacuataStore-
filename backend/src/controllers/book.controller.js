const bookService   =   require("../services/book.service");

const getAllBooks   =   async(req, res)=>{
    try {
        const books =   await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports  =   {
    getAllBooks,
};