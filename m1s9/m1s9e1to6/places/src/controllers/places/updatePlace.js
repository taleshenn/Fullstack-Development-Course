const Place = require("../../models/places");

async function updatePlace(res, req) {
	try {
		const updateData = await Place.findByPk(req.params.id);

		if (!updateData) {
			return res.status(404).json({ message: "Dado não encontrado." });
		}

		updateData.name = req.body.name || updatePlace.name;
		updateData.description = req.body.descrition || updatePlace.description;

		await updateData.save();

		res.json(updatePlace);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Não foi possível executar sua solicitação" });
	}
}

module.exports = updatePlace;
