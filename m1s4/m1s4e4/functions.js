class conta {
	#senha;
	#saldo;

	constructor(senha, saldo = 0) {
		this.#senha = senha;
		this.#saldo = saldo;
	}

	deposito(senha, valor) {
		if (senha !== this.#senha) {
			console.log("Senha incorreta");
			return;
		}
		this.#saldo += valor;
	}

	retirada(senha, valor) {
		if (senha !== this.#senha) {
			console.log("Senha incorreta");
			return;
		}
		if (this.#saldo < valor) {
			console.log("Seu saldo é insuficiente para essa operação");
			return;
		}
		this.#saldo -= valor;
	}

	extrato() {
		console.log(this.#saldo);
	}
}

class contaPoupanca extends conta {
	constructor(senha, saldo = 0) {
		super(senha, saldo);
	}

	atualizaJuros() {
		this.#saldo = this.#saldo + this.#saldo * 0.012; //aumento da taxa de juros
	}
}

const contaPoupanca = new contaPoupanca("123456", 100);
contaPoupanca.extrato(); // Imprime 100
contaPoupanca.atualizaJuros();
contaPoupanca.extrato(); // Imprime 101.2
