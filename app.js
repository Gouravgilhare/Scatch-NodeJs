const express = require( 'express');
const app = express();
const db= require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter'); 
const usersRouter = require('./routes/usersRouter'); 
const productsRouter = require('./routes/productsRouter'); 
const indexRouter = require('./routes/index');
const cookieParser =require("cookie-parser");
const path  = require('path');
const dotenv = require('dotenv').config();
// const {generateToken} = require('./utils/generateToken');

console.log("ownersRouter:", typeof ownersRouter);
console.log("usersRouter:", typeof usersRouter);
console.log("productsRouter:", typeof productsRouter);
console.log("indexRouter:", typeof indexRouter);


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , 'public')));
app.set("view engine", "ejs");


app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/', indexRouter);


app.get('/', (req, res)=>{
    res.send("Hello");
})


app.listen(3000)