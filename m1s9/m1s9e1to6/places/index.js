require("dotenv").config();
const express = require("express");

// Importando o módulo loginFiles para conexão com o banco de dados
const connection = require("./src/database/loginFiles");

// Importando o middleware log
const log = require("./src/middlewares/log");

// Importando o middleware validate-new-user
const validateNewUser = require("./src/middlewares/validate-new-user");

// Importando o middleware validate-token
const validateToken = require("./src/middlewares/validate-token");

// Importando o controlador createPlace
const createPlace = require("./src/controllers/tasks/createPlace");

// Importando o controlador findPlace
const findPlace = require("./src/controllers/tasks/findPlace");

// Importando o controlador deletePlace
const deletePlace = require("./src/controllers/tasks/deletePlace");

// Importando o controlador updatePlace
const updatePlace = require("./src/controllers/tasks/updatePlace");

// Importando o controlador createUser
const createUser = require("./src/controllers/users/createUser");

// Importando o controlador createLogin
const createLogin = require("./src/controllers/users/createLogin");

const app = express();
app.use(express.json());

// Utilizando o middleware log para todas as rotas
app.use(log);

// Autenticando a conexão com o banco de dados
connection.authenticate();

// Sincronizando os modelos do banco de dados com a opção alter
connection.sync({ alter: true });
console.log("Conectado.");

// Enviando mensagem de boas-vindas para a rota raiz
app.get("/", (request, response) => {
	response.json({ messagem: "Bem-vindo" });
});

// Criando um local com validação de token de autenticação
app.post("/places", validateToken, createPlace);

// Buscando locais com validação de token de autenticação
app.get("/places", validateToken, findPlace);

// Deletando um local com validação de token de autenticação
app.delete("/places/:id", validateToken, deletePlace);

// Atualizando um local com validação de token de autenticação
app.put("/places/:id", validateToken, updatePlace);

// Criando um novo usuário com validação
app.post("/users", validateNewUser, createUser);

// Criando um login para um usuário
app.post("/users/login", createLogin);

// Ouvindo na porta 3333 e exibindo uma mensagem quando a aplicação estiver online
app.listen(3333, () => console.log("Servidor online"));
