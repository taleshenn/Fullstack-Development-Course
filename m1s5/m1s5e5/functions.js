function contarVogais(str) {
	// é uma string?
	if (typeof str !== "string") {
		return "Erro: O valor informado não é uma string.";
	}

	// Converter a string para letras minúsculas para facilitar a comparação
	str = str.toLowerCase();

	// Definir as vogais
	const vogais = "aeiou";

	let totalVogais = 0;

	// Iterar sobre cada letra da string
	for (let i = 0; i < str.length; i++) {
		// Verificar se a letra atual é uma vogal
		if (vogais.includes(str[i])) {
			totalVogais++;
		}
	}

	// Verificar se encontrou alguma vogal
	if (totalVogais === 0) {
		return "A palavra não contém nenhuma vogal.";
	} else {
		return `Total de vogais: ${totalVogais}`;
	}
}

// Exemplo de uso:
const palavra = "exemplo de texto";
const resultado = contarVogais(palavra);
console.log(resultado);
