class Person {
	constructor(nome, idade, altura) {
		this.nome = nome;
		this.idade = idade;
		this.altura = altura;
	}

	apresentar() {
		console.log(
			`Olá, eu sou ${this.nome}, eu tenho ${this.idade} anos e tenho ${this.altura} de altura.`
		);
	}
}

const pessoa = new Person("Tales", 47, 1.74);
pessoa.apresentar();
