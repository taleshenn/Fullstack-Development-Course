const express = require("express"); // Importa o framework Express para criar a aplicação web
const app = express(); // Cria uma instância da aplicação
const port = 3333; // Define a porta em que a aplicação será executada

const { Sequelize } = require("sequelize"); // Importa o Sequelize para fazer a conexão com o banco de dados
const config = require("./src/database/config/config.json"); // Importa as configurações do banco de dados a partir de um arquivo JSON

const sequelize = new Sequelize(config.development); // Cria uma instância do Sequelize com as configurações do banco de dados

const PlacesModel = require("./src/database/models/places"); // Importa o modelo de dados da tabela "places"
const Places = PlacesModel(sequelize); // Cria uma instância do modelo de dados passando a instância do Sequelize como parâmetro

app.use(express.json()); // Habilita o uso do formato JSON para as requisições

// Cria a tabela apenas se ela não existir
sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
});

// Define a rota principal da aplicação
app.get("/", (req, res) => {
	console.log("Is Alive!"); // Exibe uma mensagem no console do servidor
	res.json({ message: "Welcome" }); // Retorna uma mensagem em formato JSON como resposta para a requisição
});

// Define a rota para listar todos os lugares (registros) na tabela "places"
app.get("/places", async (req, res) => {
	try {
		const places = await Places.findAll(); // Busca todos os registros da tabela "places" usando o modelo de dados criado anteriormente
		res.json(places); // Retorna os registros encontrados em formato JSON como resposta para a requisição
	} catch (err) {
		console.error(err); // Exibe uma mensagem de erro no console do servidor
		res.status(500).json({ message: "Error retrieving places." }); // Retorna uma mensagem de erro em formato JSON como resposta para a requisição
	}
});

// Define a rota para criar um novo lugar (registro) na tabela "places"
app.post("/places", (req, res) => {
	const name = req.body.name;
	const telephone_number = req.body.telephone_number;
	const opening_hours = req.body.opening_hours;
	const description = req.body.description;
	const latitude_degrees = req.body.latitude_degrees;
	const longitude_degrees = req.body.longitude_degrees;

	Places.create({
		name: name,
		telephone_number: telephone_number,
		opening_hours: opening_hours,
		description: description,
		latitude_degrees: latitude_degrees,
		longitude_degrees: longitude_degrees,
	})
		.then((places) => {
			res.json(places); // Retorna o novo registro criado em formato JSON como resposta para a requisição
		})
		.catch((error) => {
			console.log(error); // Exibe uma mensagem de erro no console do servidor
			res.status(500).json({ error: "Internal server error" }); // Retorna uma mensagem de erro em formato JSON como resposta para a requisição
		});
});

// Define a rota para excluir um lugar (registro) da tabela "places"
app.delete("/places/:id", async (req, res) => {
	const id = req.params.id; // Obtém o valor do parâmetro :id da URL da requisição

	try {
		const place = await Places.findOne({ where: { id: id } }); // Busca um registro na tabela "places" com o id informado

		if (!place) {
			// Verifica se o registro foi encontrado
			return res.status(404).json({ message: "Place not found" }); // Retorna uma mensagem de erro em formato JSON como resposta para a requisição
		}

		await place.destroy(); // Exclui o registro encontrado

		res.json({ message: "Place deleted successfully" }); // Retorna uma mensagem de sucesso em formato JSON como resposta para a requisição
	} catch (err) {
		console.error(err); // Exibe uma mensagem de erro no console do servidor
		res.status(500).json({ message: "Error deleting place" }); // Retorna uma mensagem de erro em formato JSON como resposta para a requisição
	}
});

// Implementar a rota PUT /places/:id para atualizar uma instituição existente
app.put("/places/:id", async (req, res) => {
	try {
		// Procura a instituição pelo id
		const place = await Places.findByPk(req.params.id);

		if (!place) {
			// Se a instituição não existir, retorna um erro
			res.status(404).send("Instituição não encontrada.");
		} else {
			// Atualiza apenas os campos permitidos (name, telephone_number, opening_hours, description, latitude_degrees e longitude_degrees)
			await place.update({
				name: req.body.name || place.name,
				telephone_number: req.body.telephone_number || place.telephone_number,
				opening_hours: req.body.opening_hours || place.opening_hours,
				description: req.body.description || place.description,
				latitude_degrees: req.body.latitude_degrees || place.latitude_degrees,
				longitude_degrees:
					req.body.longitude_degrees || place.longitude_degrees,
			});

			// Retorna a instituição atualizada
			res.json(place);
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Ocorreu um erro ao atualizar a instituição.");
	}
});
