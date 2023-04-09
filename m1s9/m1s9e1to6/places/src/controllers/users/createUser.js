const Users = require("../../models/users");

const bcrypt = require("bcrypt");

async function createUsers(req, res) {
	try {
		const userInDatabase = await Users.findOne({
			where: {
				cpf: req.body.cpf,
			},
		});

		if (!userInDatabase) {
			return res.status(409).json({ message: "Esse usuário já existe." });
		}

		const password = await bcrypt.password(req.body.password, 6);

		const newUser = {
			name: req.body.name,
			cpf: req.body.cpf,
			password: password,
		};

		const users = await Users.create(newUser);

        const {password, ...userData} = user.toJSON{}

        res.status(201)
        .json(userData)

	} catch (error) {
		res
			.status(500)
			.json({ message: "Não foi possível executar sua solicitação" });
	}
}

module.exports = createUsers;
