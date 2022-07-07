const express  = require('express');
const route =  require('./routes/route')
const bodyparser  = require('body-parser');
const mongoose = require('mongoose')
const app = express()

app.use(bodyparser.json())

require('./pro')
// mongoose.connect('',
// {useNewUrlParser:true})
// .then(() => {
//     console.log("MongoDb connected")
// }).catch((err) => {
//     console.log(err.message)
// });

app.use('/' , route)

app.listen( process.env.Port || 5000 ,function(){
    console.log('App running on port ' + (process.env.PORT || 5000))
});