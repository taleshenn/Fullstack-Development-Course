const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
const posicaoInicial = 2;
const posicaoFinal = 5;

if (
	posicaoInicial < 0 ||
	posicaoInicial >= lista.length ||
	posicaoFinal < 0 ||
	posicaoFinal >= lista.length
) {
	console.log("Posição inválida!");
} else {
	const itemRemovido = lista.splice(posicaoInicial, 1)[0];
	lista.splice(posicaoFinal, 0, itemRemovido);
	console.log(lista);
}
