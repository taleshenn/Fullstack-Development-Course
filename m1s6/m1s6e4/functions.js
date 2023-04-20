const express = require("express");
const app = express();

// Rota para receber o nome como parâmetro da URL
app.get("/api/nome/:nome", (req, res) => {
	// Captura o nome passado como parâmetro da URL
	const nome = req.params.nome;
	// Imprime a mensagem com o nome no console
	console.log(`Rota de API criada pelo(a): ${nome}`);
	// Envia uma resposta de sucesso ao cliente
	res.send(`Rota de API criada pelo(a): ${nome}`);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
	console.log("Servidor iniciado na porta 3000");
});
