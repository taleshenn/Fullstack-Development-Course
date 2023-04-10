class Conta {
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

const contaCorrente = new Conta("123456", 40);

contaCorrente.deposito("123456", 50);
contaCorrente.extrato();
contaCorrente.retirada("123456", 55);
contaCorrente.extrato();
