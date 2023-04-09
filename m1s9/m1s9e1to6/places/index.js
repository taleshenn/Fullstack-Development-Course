require("dotenv").config();
const express = require("express");

const connection = require("./src/database/loginFiles");

const log = require("./src/middlewares/log");
const validateNewUser = require("./src/middlewares/validate-new-user");
const validateToken = require("./src/middlewares/validate-token");

const createPlace = require("./src/controllers/tasks/createPlace");
const findPlace = require("./src/controllers/tasks/findPlace");
const deletePlace = require("./src/controllers/tasks/deletePlace");
const updatePlace = require("./src/controllers/tasks/updatePlace");

const createUser = require("./src/controllers/users/createUser");
const createLogin = require("./src/controllers/users/createLogin");

const app = express();
app.use(express.json());

app.use(log);

connection.authenticate();
connection.sync({ alter: true });
console.log("Connection has been established successfully.");

app.get("/", (request, response) => {
	response.json({ messagem: "Welcome" });
});

app.post("/tarefas", validateToken, createPlace);
app.get("/tarefas", validateToken, findPlace);
app.delete("/tarefas/:id", validateToken, deletePlace);
app.put("/tarefas/:id", validateToken, updatePlace);

app.post("/users", validateNewUser, createUser);
app.post("/users/login", createLogin);

app.listen(6666, () => console.log("online application"));
