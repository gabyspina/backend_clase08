const { application } = require('express');
const express = require('express');
const router = express.Router();
const Contenedor = require('../Contenedor/contenedor');

const contenedor = new Contenedor();

router.get('/', (req, res) => {
	let result = contenedor.getAll();
	res.send(result);
});

router.get('/:id', (req, res) => {
	let result = manager.getById(req.params.id);
	if (!result) return res.send({ error: 'Producto no existe' });
	res.send(result);
});

router.post('/', (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.thumbnail)
		return res.send({ error: 'Dato requerido' });
	let result = contenedor.createProd(req.body);
	res.send(result);
});

module.exports = router;
