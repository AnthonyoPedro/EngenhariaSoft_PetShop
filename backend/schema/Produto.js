const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema({
    descricao : {type: String, required: true},
    preco : {type: Number, required: true}
})


 module.exports = mongoose.model("Produto", produtoSchema);
