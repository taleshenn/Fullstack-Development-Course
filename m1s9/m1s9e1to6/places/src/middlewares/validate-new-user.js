const yup = require("yup");

const validation = yup.object().shape({
	name: yup.string("Precisa ser uma string").required("Nome é obrigatório"),
	password: yup
		.string()
		.min(8, "A senha tem que ter mínimo 8 caracteres")
		.required("Senha é obrigatório"),
});

function validateNewUser(request, response, next) {
	console.log("Originais", request.body);

	try {
		validation.validateSync(request.body);
		next();
	} catch (error) {
		response.status(400).json({ message: error.message });
	}
}

module.exports = validateNewUser;
