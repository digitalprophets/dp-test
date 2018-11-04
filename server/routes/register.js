const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/', async (req, res) => {
    // validate username, email and password
    // can also be done in client app too

    console.log(db.User);
    // insert into db
    const user = db.User.build({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await user.save();
    // check for errors sent by db
    // if any errors return 400 bad request and err.message

    // generate jwt
    // return user object in body and jwt in header
    res.header('x-auth-token', 'token').send(user.get());
});

module.exports = router;