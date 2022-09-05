const { application } = require('express');
const express = require('express');
const router = express.Router();

products = [];

router.get('/', (req, res) => {
	res.send(products);
});

router.post('/', (req, res) => {
	let prod = req.body;
	products.push(prod);
	res.send({ message: 'Producto creado', prodCreated: prod });
});

module.exports = router;
