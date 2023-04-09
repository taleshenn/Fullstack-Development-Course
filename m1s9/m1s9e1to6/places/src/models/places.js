const Sequelize = require("sequelize");
const connection = require("../database");

const Places = connection.define("places", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	telephone_number: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	opening_hours: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	latitude_degrees: {
		type: DataTypes.DOUBLE,
		allowNull: false,
	},
	longitude_degrees: {
		type: DataTypes.DOUBLE,
		allowNull: false,
	},
});

module.exports = Places;
