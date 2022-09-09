const fs = require('fs');

let products = require('./prod.js');

class Manager {
	createProd = (prod) => {
		let id = products[products.length - 1].id + 1;
		prod = {
			id,
			...prod,
		};
		products.push(prod);
		console.log(prod);
		return prod;
	};

	getAll = () => {
		return products;
	};

	getByID = (id) => {
		id = parseInt(id);
		return products.find((item) => item.id === id);
	};

	updateByID = (id, product) => {
		id = parseInt(id);
		let newProducts = products.map((item) => {
			if (item.id === id) {
				return {
					id,
					...product,
				};
			} else return item;
		});
		products = newProducts;
		return this.getByID(id);
	};

	delete = (id) => {
		id = parseInt(id);
		let newProducts = archivoProductos.filter((item) => item.id !== id);
		archivoProductos = newProducts;
		return newProducts;
	};
}

module.exports = Manager;
