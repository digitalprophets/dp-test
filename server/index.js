const express = require('express');
const app = express();

// for handling exceptions
require('express-async-errors');

// for handling errors
process.on('unhandledRejection', (ex) => {
    throw ex;
});

// parses the request to JSON format
//and puts the result in req.body
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// config
require('./startup/config')();
// set up all routes
require('./startup/routes')(app);
// connection to database
require('./models');

// listen to requests
const port = process.env.port || 8081;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});