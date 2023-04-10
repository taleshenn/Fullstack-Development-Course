const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

function adicionarNomes(nomes) {
	// Verifica se foi enviado um valor válido para a função
	if (!nomes || !Array.isArray(nomes) || nomes.length === 0) {
		console.log(
			"Erro: É necessário enviar um ou mais nomes em formato de array."
		);
		return;
	}

	// Verifica se todos os nomes enviados são strings
	const nomesInvalidos = nomes.filter((nome) => typeof nome !== "string");
	if (nomesInvalidos.length > 0) {
		console.log("Erro: Os nomes enviados devem ser do tipo string.");
		return;
	}

	// Verifica se algum nome já existe na lista
	const nomesDuplicados = nomes.filter((nome) => lista.includes(nome));
	if (nomesDuplicados.length > 0) {
		console.log("Erro: Um ou mais nomes enviados já existe na lista.");
		return;
	}

	// Adiciona os nomes na lista
	lista.push(...nomes);
	console.log("Nova lista:", lista);
}

// Exemplo de uso
adicionarNomes(["Marcelo", "Sandra"]); // Adiciona 'Marcelo' e 'Sandra' na lista
adicionarNomes(["Pedro", "Maria"]); // Retorna mensagem de erro, 'Pedro' já existe na lista
adicionarNomes([42, "João"]); // Retorna mensagem de erro, '42' não é uma string
adicionarNomes([]); // Retorna mensagem de erro, nenhum nome foi enviado
