require('dotenv').config();

const express        = require('express');//express is frame work based on node
const logger         = require('morgan');//terminal error logger
const path           = require('path');
const bodyParser     = require('body-parser');
// const dotenv         = require('dotenv').config();
const homeRoute      = require('./routes/index');

const app = express();

app.set('view engine','ejs');
app.set('views','views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', homeRoute);

const PORT = process.env.PORT || process.argv[2] || 3000;


app.listen(PORT, console.log('Server running on port', PORT));






