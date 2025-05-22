const express = require('express');
const app = express();


app.set('view engine','ejs');
app.use(express.static("cssfolder"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('',require('./server/routes/routes'))



app.listen(10000)

