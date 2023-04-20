class Bakery {
	constructor() {}

	addStock(product, quantity) {
		const currentStock = localStorage.getItem(product);
		const newQuantity = currentStock
			? parseInt(currentStock) + quantity
			: quantity;
		localStorage.setItem(product, newQuantity);
	}

	purchase(product, quantity) {
		const stock = localStorage.getItem(product);

		if (stock) {
			const currentStock = parseInt(stock);
			if (currentStock >= quantity) {
				const newStock = currentStock - quantity;
				localStorage.setItem(product, newStock);
				console.log(`${quantity} units of ${product} purchased`);
			} else {
				console.log(`Insufficient stock for ${quantity} units of ${product}`);
			}
		} else {
			console.log(`${product} not found in stock`);
		}
	}

	viewStock() {
		for (let i = 0; i < localStorage.length; i++) {
			const product = localStorage.key(i);
			const quantity = localStorage.getItem(product);
			console.log(`${product}: ${quantity}`);
		}
	}
}

const bakery = new Bakery();

bakery.addStock("Pie", 8);
bakery.addStock("Muffins", 6);

bakery.purchase("Pie", 4);
bakery.purchase("Muffins", 7);
bakery.purchase("Pie", 3);

bakery.viewStock();
