const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

const resultado = [];

for (let i = 0; i < usuarios.length; i++) {
	resultado.push(`${usuarios[i]} - ${frutas[frutas.length - 1 - i]}`);
}

console.log(resultado);
