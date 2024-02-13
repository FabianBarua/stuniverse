const express = require('express')
const routes = require('./routes');
require('dotenv').config()
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

module.exports = app;