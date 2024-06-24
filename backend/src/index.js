const app   =   require('./app');


app.listen(app.get('port'), ()=>{
    console.log('Server listenning on port: ', app.get('port')); 
})



