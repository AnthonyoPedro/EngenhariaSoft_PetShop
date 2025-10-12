const express = require("express")
const router = express.Router();

const tuttorController = require("../controllers/TutorController");

router.post("/create", tuttorController.createTutor);

router.put("/:id", tuttorController.updateTutor)

module.exports = router;