function shopping() {
	addItemsToCart();
	const total = checkout();
	const cash = pay();
	const payback = calculatePayback(total, cash);
	displayPayback(cash, payback);
}

function pay() {
	let cash;
	do {
		cash = prompt("VALOR RECEBIDO DO CLIENTE?");
	} while (!cash);
	return parseFloat(cash);
}

function checkout() {
	const cart = getCartFromLocalStorage();
	const total = calculateTotal(cart);
	displayTotal(cart.length, total);
	displayCartItems(cart);
	return total;
}

function addItemsToCart() {
	const cart = [];
	let price;

	do {
		price = prompt("Preço do produto: ");
		if (price) {
			cart.push(parseFloat(price));
		}
	} while (price);

	addToLocalStorage(cart);
}

function displayCartItems(cart) {
	const itemsContainer = document.querySelector("#body");
	itemsContainer.innerHTML = "";
	cart.forEach((price, index) => {
		const item = document.createElement("span");
		item.textContent = `Produto ${index + 1} : R$ ${price.toFixed(2)}`;
		itemsContainer.appendChild(item);
	});
}

function calculateTotal(cart) {
	return cart.reduce((total, price) => total + price, 0);
}

function displayTotal(totalItems, totalValue) {
	const totalContainer = document.querySelector("#footer");
	totalContainer.innerHTML = `
    <div>
      <span class='text'>Total de itens: ${totalItems}</span>
      <span class='text'>Total da compra: R$ ${totalValue.toFixed(2)}</span>
    </div>`;
}

function calculatePayback(total, cash) {
	return cash - total;
}

function displayPayback(cash, payback) {
	const paybackContainer = document.querySelector("#footer2");
	paybackContainer.innerHTML += `<div>
    <span class='text'>Pago: R$ ${cash.toFixed(2)}</span>
    <span class='text'>Troco: R$ ${payback.toFixed(2)}</span>
  </div>`;
}

function getCartFromLocalStorage() {
	const cart = JSON.parse(localStorage.getItem("cart"));
	return cart ? cart : [];
}

function addToLocalStorage(cart) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = () => {
	!getCartFromLocalStorage() && addToLocalStorage([]);
	displayCartHistory();
};
