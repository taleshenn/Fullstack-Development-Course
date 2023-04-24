const Place = require("../../models/places");

async function place(req, res) {
	try {
		const locales = {
			name: req.body.name,
			telephone_number: req.body.telephone_number,
			opening_hours: req.body.opening_hours,
			description: req.body.description,
			latitude_degrees: req.body.latitude_degrees,
			longitude_degrees: req.body.longitude_degree,
		};

		if (!place.name || !place.description) {
			return res
				.status(400)
				.json({ message: "Nome e descrição são obrigatários" });
		}

		const inDatabase = await Place.findOne({
			where: { name: place.name },
		});

		if (inDatabase) {
			return res.status(400).json({ message: "Nome já cadastrado" });
		}

		const newPlace = await Place.create(place);

		res.status(201).json(newPlace);
	} catch (error) {
		res.status(500).json({ message: "Tente novamente mais tarde" });
	}
}

module.exports = createPlace;
