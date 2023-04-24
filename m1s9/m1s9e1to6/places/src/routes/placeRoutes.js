const express = require("express");
const router = express.Router();

const createPlace = require("../controllers/tasks/createPlace");
const findPlace = require("../controllers/tasks/findPlace");
const deletePlace = require("../controllers/tasks/deletePlace");
const updatePlace = require("../controllers/tasks/updatePlace");
const getPlaces = require("../controllers/tasks/getPlaces");

router.post("/", createPlace);
router.get("/", findPlace);
router.delete("/:id", deletePlace);
router.put("/:id", updatePlace);
router.get("/places", getPlaces);

module.exports = router;
