const express = require("express");
const router = express.Router();

const veterinarioController = require("../controllers/VeterinarioController");
const Veterinario = require("../schema/Veterinario");

router.post("/create", veterinarioController.createVet)
router.get("/buscar/:id", veterinarioController.vetFindById)
router.delete("/:id", produtoController.deleteProduto);
router.put("/id", produtoController.putProdutoById);

module.exports = router;