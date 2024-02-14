const express = require('express')
const routes = require('./routes');
const bodyParser = require('body-parser');
const { DEV_SERVER_PORT } = require('./constants');
require('dotenv').config()

const app = express()

const port = process.env.PORT || DEV_SERVER_PORT

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', routes());

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

module.exports = app;