const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/', async (req, res) => {
    // validate username, email and password
    // can also be done in client app too

    // insert into db
    const user = db.User.build({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try{
        await user.save();
    }
    catch(err) {
        // check for errors sent by db
        // if any errors return 400 bad request and err.message
        return res.status(400).send(err.errors[0].message);
    }

    // generate jwt
    // return user object in body and jwt in header
    res.header('x-auth-token', 'token').send(user.get());
});

module.exports = router;