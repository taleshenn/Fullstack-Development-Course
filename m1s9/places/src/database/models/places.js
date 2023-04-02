// Importa o Sequelize e o DataTypes do pacote sequelize
const { Sequelize, DataTypes } = require("sequelize");

// Exporta uma função que recebe uma instância do Sequelize como parâmetro
module.exports = (sequelize) => {
	// Define o modelo de dados da tabela "places"
	const Places = sequelize.define("places", {
		// Define o campo "id" como inteiro, chave primária e auto incrementável
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// Define o campo "name" como uma string, obrigatório (não pode ser nulo)
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// Define o campo "telephone_number" como uma string, opcional (pode ser nulo)
		telephone_number: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// Define o campo "opening_hours" como uma string, obrigatório (não pode ser nulo)
		opening_hours: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// Define o campo "description" como uma string, obrigatório (não pode ser nulo)
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// Define o campo "latitude_degrees" como um número de ponto flutuante de dupla precisão, obrigatório (não pode ser nulo)
		latitude_degrees: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		// Define o campo "longitude_degrees" como um número de ponto flutuante de dupla precisão, obrigatório (não pode ser nulo)
		longitude_degrees: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
	});

	// Retorna o modelo "Places"
	return Places;
};
