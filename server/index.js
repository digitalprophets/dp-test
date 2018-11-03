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