const buy = require('../routes/buy');
const login = require('../routes/login');
const me = require('../routes/me');
const products = require('../routes/products');
const register = require('../routes/register');
const error = require('../middleware/error')

module.exports = (app) => {
    // odgovori na svaki zahtev na adresu /buy/...
    // ce biti definisani u ../routes/buy.js
    app.use('/buy', buy);
    app.use('/login', login);
    app.use('/me', me);
    app.use('/products', products);
    app.use('/register', register);
    app.use(error);
}