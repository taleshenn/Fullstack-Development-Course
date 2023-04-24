const express = require("express");
const router = express.Router();

const createUser = require("../controllers/users/createUser");
const createLogin = require("../controllers/users/createLogin");
const validateNewUser = require("../middlewares/validate-new-user");

router.post("/", validateNewUser, createUser);
router.post("/sessions", createLogin);

module.exports = router;
