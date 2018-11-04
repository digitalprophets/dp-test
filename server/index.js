const express = require('express');
const app = express();

// config values
const config = require('config');

// for handling exceptions
require('express-async-errors');

// for handling errors
process.on('unhandledRejection', (ex) => {
    throw ex;
});

// parses the request to JSON format
// and puts the result in req.body
app.use(express.json());

// add headers to response so that front end
// can read them
const header = require('./middleware/header');
app.use(header);
  
// config
require('./startup/config')();
// set up all routes
require('./startup/routes')(app);
// connection to database
require('./models');

// listen to requests
const port = config.get('port');
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
