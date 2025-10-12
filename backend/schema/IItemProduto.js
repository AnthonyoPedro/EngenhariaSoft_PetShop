const mongoose = require("mongoose")

const itemProdutoSchema = new mongoose.Schema({
    produto : {type: mongoose.Schema.ObjectId, ref: "Produto", required: true},
    quantidae: {type: Number, required: true}
})

module.exports = mongoose.model("ItemProduto", itemProdutoSchema);
