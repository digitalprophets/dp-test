const express = require('express');
const app = express();

//routes
const buy = require('./routes/buy');
const login = require('./routes/login');
const me = require('./routes/me');
const products = require('./routes/products');
const register = require('./routes/register');

// TODO Veljko
// konekcija ka bazi, cak mozda bolje da stoji u models folderu
// dogovoricemo se

// parsira zahtev koji ima body u json formatu
// i rezultat smesta u req.body
app.use(express.json());

// odgovori na svaki zahtev na adresu /buy/...
// ce biti definisani u ./routes/buy.js
app.use('/buy', buy);
app.use('/login', login);
app.use('/me', me);
app.use('/products', products);
app.use('/register', register);

app.listen(8081, () => {
    console.log('Server listening on port 8081');
});