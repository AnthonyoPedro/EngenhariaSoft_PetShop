const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    cpf: {type: String, required: true, unique: true},
    crv: {type: String, required: true, unique: true}
    }
)

module.exports = mongoose.model("Veterinario", vetSchema);