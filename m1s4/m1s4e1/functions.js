class caixaRegistradora {
	estoque = [];

	constructor() {}

	adicionaEstoque(codigoBarras, preco, nome) {
		if (!codigoBarras || !preco || !nome) {
			console.log("Todos os campos são obrigatórios. Nada foi adicionado!");
		} else {
			this.estoque.push({ codigoBarras, preco, nome });
		}
	}

	startShopping(name) {}

	cart(codigoBarras, quantidade) {}

	show() {
		console.log(this.estoque);
	}
}

const caixa = new caixaRegistradora();
caixa.addStock("#888888", "12.34", "produto qualquer");
caixa.show();
