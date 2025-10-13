const express = require("express");
const router = express.Router();
const c = require("../controllers/consultaController");

router.post("/", c.salvarConsulta);
router.get("/crv/:crv", c.buscarPorCrv);
router.get("/pet/:nome", c.buscarPorNomePet);
router.get("/completa/:crv", c.buscarConsultaCompleta);
router.put("/:id/veterinario", c.atualizarVeterinario);

module.exports = router;