const app   =   require('./app');


app.listen(app.get('port'), ()=>{
    console.log('Server listenning on port: ', app.get('port')); 
})

/*app.use(express.json());
app.use("/api/books", require("./routes/book.routes"));

app.listen(PORT, () => console.log(`Server in port ${PORT}`));*/

