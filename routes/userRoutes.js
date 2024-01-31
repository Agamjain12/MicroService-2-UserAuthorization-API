const express = require("express");

const router = express.Router();
const controller = require("../controllers/userController");

router.get("/", controller.getUser);
router.post("/", controller.addUser);
router.get("/validate", controller.validateUser);

module.exports = router;
