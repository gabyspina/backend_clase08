const express = require('express');
const router = express.Router();

const Manager = require('../manager.js');
const manager = new Manager();

router.get('/', (req, res) => {
	let result = manager.getAll();
	res.send(result);
});

router.get('/:id', (req, res) => {
	let result = manager.findById(req.params.id);

	console.log(result);
	if (!result) return res.send({ error: 'Producto no existe' });
	res.send(result);
});

router.post('/', (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.thumbnail)
		return res.send({ error: 'Dato requerido' });
	let result = manager.createProd(req.body);
	res.send(result);
});

router.put('/:id', (req, res) => {
	let result = manager.updateByID(req.params.id, req.body);
	if (!result) return res.send({ error: 'Producto no encontrado' });
	res.send(result);
});

module.exports = router;
