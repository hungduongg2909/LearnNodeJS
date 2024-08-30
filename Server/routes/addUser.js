const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
let products = [];

router.post('/addUser', (req, res, next) => {
  products.push(req.body);
});

exports.routes = router;
exports.products = products;
