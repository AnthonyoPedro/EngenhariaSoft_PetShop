const express = require("express")

const router = express.Router();

const petController = require("../controllers/PetController")

router.post("/create", petController.createPet);
router.get("/:id", petController.getPetById);
router.put("/id", petController.putPetById);
router.delete("/:id", petController.deletePet);

module.exports = router;
