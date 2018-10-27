const express = require('express');
const app = express();

require('express-async-errors');

// parsira zahtev koji ima body u json formatu
// i rezultat smesta u req.body
app.use(express.json());

// config
require('./startup/config')();
// set up all routes
require('./startup/routes')(app);
// connection to database
require('./startup/db')();



process.on('unhandledRejection', (ex) => {
    throw ex;
  })


const port = process.env.port || 8081;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});