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

router.get('', (req, res) => {
    //connect and find in database

    if(products.length === 0)
        return res.status(404).send("Products not found");
    
    // if found return array of products
    res.send(products);
})

router.post('', (req, res) => { 
    const product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        //image: req.body.image
    }
    products.push(product);
    res.send(product);
});

router.put('/:id', (req, res) => {
    //Find product with id
    const product = products[req.params.id];
    //If not found status 404
    if(!product) 
        return res.status(404).send(`Product with ID:${req.params.id} was not found.`);

    //Validate 
    

    //Change parameters if no errors
    product.name = req.body.name;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
    res.send(product);
});

router.delete('/:id', (req, res) => {
    //Find product with id
    const product = products[req.params.id];
    
    //If not found status 404
    if(!product) 
        return res.status(404).send(`Product with ID:${req.params.id} was not found.`);
    
    //Delete
    const index = products.indexOf(product);
    products.splice(index, 1);

    //Response
    res.send(product);
});

module.exports = router;