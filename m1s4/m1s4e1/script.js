class CaixaRegistradora {
	constructor() {
		this.estoque = [];
		this.total = 0;
	}

	adicionarProduto(codigoBarra, preco, nome) {
		if (
			!codigoBarra ||
			!preco ||
			!nome ||
			typeof codigoBarra !== "number" ||
			typeof preco !== "number" ||
			nome === ""
		) {
			console.log(
				"O produto não foi adicionado. Preencha todos os campos corretamente."
			);
			return;
		}

		const produto = {
			codigoBarra,
			preco,
			nome,
		};
		this.estoque.push(produto);
		console.log(`Produto ${nome} adicionado ao estoque.`);
	}

	iniciarAtendimento(nomeCliente) {
		console.log(`Atendimento iniciado para o cliente: ${nomeCliente}.`);
	}

	adicionarItem(codigoBarra, quantidade) {
		const produto = this.estoque.find(
			(item) => item.codigoBarra === codigoBarra
		);
		if (produto) {
			this.total += produto.preco * quantidade;
			console.log(
				`Adicionado ${quantidade} unidades do produto ${produto.nome} à conta.`
			);
		} else {
			console.log(
				`O código de barra ${codigoBarra} não foi encontrado no estoque.`
			);
		}
	}

	verificarTotalConta() {
		console.log(`Total da conta do cliente: R$ ${this.total.toFixed(2)}`);
	}

	pagaConta(dinheiro) {
		const troco = dinheiro - this.total;
		console.log(`Total da conta: R$ ${this.total.toFixed(2)}`);
		console.log(`Dinheiro fornecido pelo cliente: R$ ${dinheiro.toFixed(2)}`);
		console.log(`Troco: R$ ${troco.toFixed(2)}`);
		this.estoque = [];
		this.total = 0;
		console.log(`Conta fechada e caixa registradora zerada.`);
	}
}

// testandodgsgas:

const caixa = new CaixaRegistradora();
caixa.adicionarProduto(123, 4.99, "Produto A");
caixa.adicionarProduto(456, 2.99, "Produto B");
const nomeCliente = prompt("Digite o nome do cliente:");
caixa.iniciarAtendimento(nomeCliente);
caixa.adicionarItem(123, 2);
caixa.verificarTotalConta();
caixa.pagaConta(50);
