// console.log("hello");

class Pessoa {
	constructor(nome, idade) {
		// <== atributos
		this.nome = nome;
		this.idade = idade;
	}
	falar() {
		console.log("hello there");
	}
}
let aluno = new Pessoa("tales", 47);
aluno.falar();

class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	falar() {
		console.log("olá mundo");
	}
}

// class Pessoa {
//     constructor(nome, idade) {
//       this.nome = nome;
//       this.idade = idade;
//     }

//     falar() {
//       console.log("olá mundo");
//     }
//   }

//   class Professor extends Pessoa {
//     constructor(nome, idade, materia, falar) {
//       super(nome, idade, falar);
//       this.materia = materia;
//       this.nome = 'walberson'
//     }
//     darAula() {
//       console.log("agora vamos dar aula de " + this.materia);
//     }
//     falar(){
//       console.log("OLA MUNDOOOOOOOO!!!!");
//     }
//   }
//   const walberson = new Professor("william", 18, "geografia");
//   console.log(walberson.nome);
///////// abastracao
// class Parafuso {
//   constructor(){
//     this.name = 'tales'
//     if(this.constructor === Parafuso){
//       throw new Error('Classe abstrata, não pode ser instanciada')
//     }
//   }
//   get tipo() {
//     throw new Error ('Método abstrato, precisa ser implementado')
//   }
// }

// class Fenda extends Parafuso {
//   constructor() {
//     super()
//   }
//   get tipo(){
//     return 'fenda'
//   }
// }

// class Philips extends Parafuso {
//   constructor() {
//     super()
//   }
//   get tipo(){
//     return 'philips'
//   }
// }
// class Allen extends Parafuso {

// }
// let parafuso = new Parafuso()
// console.log(parafuso)
// let allen = new Allen()

// console.log(allen.tipo)

////static
// class Tipo {
//   constructor (altura,largura){
//     this.altura = altura
//     this.largura = largura
//   }
//   static multiply (altura=this.altura,largura=this.largura){
//     this.altura = altura
//     this.largura = largura
//     return this.altura * this.largura
//   }
// }

// const multi = new Tipo(2,2)
// //console.log(multi.multiply(2,2))
// console.log(Tipo.multiply(2,2))
