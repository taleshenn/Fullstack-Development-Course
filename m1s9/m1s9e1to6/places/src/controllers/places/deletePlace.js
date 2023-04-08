const Place = require("../../models/places");

async function deletePlace(req, res) {
	try {
		await Place.destroy({
			where: {
				id: req.params.id,
			},
		});

		res.status(200).json({ message: "Deletado com sucesso." });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Não foi possível executar sua solicitação" });
	}
}

module.exports = deletePlace;
