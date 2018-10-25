const express = require('express');

const app = express();

// TODO Veljko
// konekcija ka bazi, cak mozda bolje da stoji u models folderu
// dogovoricemo se

// parsira zahtev koji ima body u json formatu
// i rezultat smesta u req.body
app.use(express.json());

app.listen(8081, () => {
    console.log('Server listening on port 8081');
});