class Padaria {
	constructor() {}

	addEstoque(produto, quantidade) {
		localStorage.setItem(produto, quantidade);
	}

	compra(produto, quantidade) {
		const estoque = localStorage.getItem(produto);

		if (estoque >= quantidade) {
			const novoEstoque = estoque - quantidade;
			localStorage.setItem(produto, novoEstoque);
			console.log(`${quantidade} unidades de ${produto} compradas`);
		} else {
			console.log(`Não há ${quantidade} unidades de ${produto} em estoque`);
		}
	}

	verEstoque() {
		for (let i = 0; i < localStorage.length; i++) {
			const produto = localStorage.key(i);
			const quantidade = localStorage.getItem(produto);
			console.log(`${produto}: ${quantidade}`);
		}
	}
}

const padaria = new Padaria();

padaria.addEstoque("Pão", 10);
padaria.addEstoque("Bolo", 5);

padaria.compra("Pão", 3);
padaria.compra("Bolo", 2);
padaria.compra("Pão", 8);

padaria.verEstoque();
