const express = require('express');
const router = express.Router();

const products = [
    {      
        name: 'product1',
        price: 100,
        category: 'bicikle',
        description: 'mnogo lepa bicikla ima oba tocka',
        //image: ''
    },
    {      
        name: 'product2',
        price: 200,
        category: 'tronitet',
        description: 'mnogo lep trotinet ima oba tocka',
        //image: ''
    },
    {      
        name: 'product3',
        price: 400,
        category: 'teletabis',
        description: 'fali mu jedno televizorce',
        //image: ''
    }
];


router.get('/:id', (req, res) => {
    // connect and find in database

    const id = req.params.id;

    // if not found status 404
    if(id >= products.length){
        res.status(404).send("Product not found");
        return;
    }

    // if found return product with that id
    res.send(products[id]);

});

module.exports = router;