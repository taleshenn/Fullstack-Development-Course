const Place = require("../../models/places");

async function findPlace(req, res) {
	try {
		const showPlace = await Place.findAll({
			where: {
				user_id: req.body.userId,
			},
		});

		res.json(showPlace);
	} catch (error) {
		res.status(500).json({ message: "Não foi possível encontrar o local" });
	}
}

module.exports = findPlace;
