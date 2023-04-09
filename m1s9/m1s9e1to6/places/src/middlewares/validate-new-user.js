const yup = require("yup");

const validation = yup.object().shape({
	name: yup
		.string("O nome precisa ser uma string")
		.required("nome é obrigatório"),
	password: yup
		.string()
		.min(10, "A senha tem que ter pelomenos 10 caracteres")
		.required("Senha é obrigatório"),
});

function validateNewUser(request, response, next) {
	console.log("dados originais", request.body);

	try {
		validation.validateSync(request.body);
		next();
	} catch (error) {
		response.status(400).json({ message: error.message });
	}
}

module.exports = validateNewUser;
