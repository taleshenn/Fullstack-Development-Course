//Uma forma simplificada de resolver esse exercício em ES6 seria utilizando o método includes
//para verificar se o nome do usuário existe na lista e, em seguida, utilizar o método filter
//para remover o nome do usuário encontrado e retornar a lista restante. Veja o exemplo abaixo:

const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

function buscarUsuario(nomeUsuario) {
	if (!lista.includes(nomeUsuario)) {
		return console.log("Usuário não encontrado");
	}

	const listaRestante = lista.filter((nome) => nome !== nomeUsuario);
	console.log(`${nomeUsuario}, ${listaRestante}`);
}

buscarUsuario("Pedro"); // Pedro, José,Aderbal,Danilo,Luisa,Vitoria
buscarUsuario("João"); // Usuário não encontrado

//Nesse exemplo, a função buscarUsuario recebe o nome do usuário a ser procurado.
//Se o nome não for encontrado na lista, a função retorna uma mensagem de erro.
//Caso contrário, a função utiliza o método filter para remover o nome do usuário encontrado e,
//em seguida, exibe o nome do usuário e a lista restante utilizando o método console.log.
