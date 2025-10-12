const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/ProdutoController")

router.post("/create", produtoController.createProduto)

router.get("/buscar/:id", produtoController.produtoFindById)
router.get("/", produtoController.produtoFindAll)

module.exports = router;