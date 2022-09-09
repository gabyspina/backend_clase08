const fs = require('fs');

const archivoProductos = './prod.json';

class Contenedor {
	createProd = (prod) => {
		let id = archivoProductos[archivoProductos.length - 1].id + 1;
		prod = {
			id,
			...prod,
		};
		archivoProductos.push(prod);

		return prod;
	};

	getAll = () => {
		return archivoProductos;
	};

	getByID = (id) => {
		id = parseInt(id);
		return archivoProductos.find((item) => item.id === id);
	};

	updateByID = (id, product) => {
		id = parseInt(id);
		let newProducts = archivoProductos.map((item) => {
			if (item.id === id) {
				return {
					id,
					...product,
				};
			} else return item;
		});
		archivoProductos = newProducts;
		return this.getByID(id);
	};

	delete = (id) => {
		id = parseInt(id);
		let newProducts = archivoProductos.filter((item) => item.id !== id);
		archivoProductos = newProducts;
		return newProducts;
	};
}
module.exports = Contenedor;
