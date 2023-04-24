const Users = require("../../models/users");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

async function creatLogin(req, res) {
	try {
		const userInDatabase = await Users.findOne({
			where: {
				cpf: req.body.cpf,
			},
		});

		if (!userInDatabase) {
			return res.status(404).json({ message: "Dados inválidos" });
		}

		const passwordValidation = await bcrypt.compare(
			req,
			body.password,
			userInDatabase.password
		);

		if (!passwordValidation) {
			return res.status(404).json({ message: "Verifique seus dados" });
		}

		const token = jwt.sign(
			{
				id: userInDatabase.id,
				name: userInDatabase.name,
			},

			process.env.CHAVE_DO_TOKEN,

			{
				expiresIn: "1h",
			}
		);

		res.json({
			name: userInDatabase.name,
			token: token,
		});
	} catch (error) {
		res.status(500).json({ message: "Não foi possível realizar o login" });
	}
}

module.exports = creatLogin;
