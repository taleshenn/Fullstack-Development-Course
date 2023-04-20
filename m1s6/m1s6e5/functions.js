const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware para fazer o parse do corpo da requisição
app.use(bodyParser.json());

// Rota para receber um objeto pelo corpo da requisição
app.post("/api/objeto", (req, res) => {
	// Captura o objeto enviado no corpo da requisição
	const objeto = req.body;
	// Envia o objeto como resposta no formato JSON
	res.json(objeto);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
	console.log("Servidor iniciado na porta 3000");
});
