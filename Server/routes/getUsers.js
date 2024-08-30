const express = require('express');
const products = require('./addUser');

const router = express.Router();

router.get('/users', (req, res) => {
    res.status(200).json(products.products);
});

module.exports = router;
