const listaUsuarios = [
	{ nome: "luis", idade: 26 },
	{ nome: "norma", idade: 16 },
	{ nome: "daiana", idade: 26 },
	{ nome: "jorge", idade: 16 },
	{ nome: "kauan", idade: 16 },
	{ nome: "charles", idade: 26 },
	{ nome: "marco", idade: 16 },
	{ nome: "bruno", idade: 16 },
];

//  idades menores de 18
const usuariosMenoresDe18 = listaUsuarios.filter(
	(usuario) => usuario.idade < 18
);

//  idades maiores ou iguais a 18
const usuariosMaioresDe18 = listaUsuarios.filter(
	(usuario) => usuario.idade >= 18
);

// Exibir os resultados de forma amigável
console.log("Usuários com idades menores de 18:");
for (const usuario of usuariosMenoresDe18) {
	console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
}

console.log("\nUsuários com idades maiores ou iguais a 18:");
for (const usuario of usuariosMaioresDe18) {
	console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
}
