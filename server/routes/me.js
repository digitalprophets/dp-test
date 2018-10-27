const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    // get my id from jwt sent in req.header

    // if id not in database return 404

    // otherwise return user object 
    const me = {
        name: 'Pera',
        email: 'pera@gmail.com',
        purchases: [
            {
                product: {
                    name: 'tricikl',
                    price: 2000,
                    category: 1,
                    description: 'Mlogo lep tricikl, oridjinale',
                    //image:
                },
                date: '30.02.2019.',
                seller_username: 'Andrija_zvani_Prevara'
            }
        ]
    }
    res.send(me);

});

module.exports = router;