const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const buyer_id = req.body.buyer_id;
    const product_id = req.body.product_id;
    // find product buyer and product in database

    // if not found return 400. bad request

    // otherwise buy product
    // write this purchase to db
    // return purchase object
    res.send({
        purchase_id: 1,
        buyer_id: buyer_id,
        product_id: product_id
    });
});

module.exports = router;