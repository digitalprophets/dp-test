const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // validate username, email and password
    // can also be done in client app too

    // insert into db
    // check for errors sent by db
    // if any errors return 400 bad request and err.message

    // generate jwt
    // return user object in body and jwt in header
    res.header('x-auth-token', 'token').send({
        id: 1,
        username: req.body.username,
        email: req.body.email
    });
});

module.exports = router;