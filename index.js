var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var router = require('./routes/records');
const connection_string = "mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study"
const PORT = process.env.PORT || 5000

mongoose.connect(connection_string, { useNewUrlParser: true});
const database = mongoose.connection;

if (!database) {
    console.error('Connection to MongoDB is failed.')
    return;
}

var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/records', router);  // router for records
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
