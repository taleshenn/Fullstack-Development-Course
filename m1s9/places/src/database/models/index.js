"use strict";
/* 
Exemplod e uso da A diretiva "use strict" :variáveis ​​não declaradas não podem ser usadas, 
o que evita erros de digitação que criam novas variáveis ​​globais e,
assim, dificultam a depuração.
É uma boa prática incluir a diretiva "use strict"; no início do arquivo, 
pois permite que o JavaScript seja executado em um modo mais seguro e com menos surpresas.
*/

// Importa o módulo de manipulação de arquivos
const fs = require("fs");
// Importa o módulo de caminhos
const path = require("path");
// Importa o Sequelize, um ORM para o Node.js
const Sequelize = require("sequelize");
// Importa o módulo de processos
const process = require("process");

// Obtém o nome do arquivo principal
const basename = path.basename(__filename);

// Obtém o ambiente de execução, definido em NODE_ENV
const env = process.env.NODE_ENV || "development";

// Carrega a configuração do banco de dados a partir do arquivo config.json
const config = require(__dirname + "/../config/config.json")[env];

// Cria um objeto que irá armazenar todos os modelos definidos
const db = {};

let sequelize;
if (config.use_env_variable) {
	// Se estiver usando uma variável de ambiente para a conexão do banco de dados
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	// Caso contrário, usa as informações da configuração
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

// Lê todos os arquivos do diretório atual (exceto este) e para cada um que é um arquivo JS que não é um teste, importa o modelo correspondente
fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && // não começa com '.'
			file !== basename && // não é o nome deste arquivo
			file.slice(-3) === ".js" && // termina com '.js'
			file.indexOf(".test.js") === -1 // não contém '.test.js'
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

// Para cada modelo importado, chama o método 'associate' (se existir) para relacionar os modelos entre si
Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

// Adiciona o objeto sequelize ao objeto db
db.sequelize = sequelize;
// Adiciona o construtor do Sequelize ao objeto db
db.Sequelize = Sequelize;

// Exporta o objeto db
module.exports = db;
