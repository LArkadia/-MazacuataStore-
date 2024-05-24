const express   = require('express');
const config =  require('./config');

const books  =   require('./routes/book.routes')

const app = express();
//config
app.set('port', config.app.port);
//rutas
app.use('/api/books', books);
module.exports  =   app;