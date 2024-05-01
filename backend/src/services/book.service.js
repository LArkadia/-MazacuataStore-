const mysqlService  =   require("./mysql.service");

const getAllBooks   =   async()=>{
    try {
        const query =   "SELCT * FROM libro";
        const getAllBooks   =   await   mysqlService.doQuery(query)
        return; 
    } catch (error) {
        throw new Error('Error tratando de obtener libros de la BD')
    }
};

module.exports  =   {
    getAllBooks,
};