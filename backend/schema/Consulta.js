const mongoose = require("mongoose");
const Veterinario = require("./Veterinario");

const consultaSchema = new mongoose.Schema({
    pets: {type: mongoose.Schema.Types.ObjectId, ref: "Pet"}, 
    Veterinario: {type: mongoose.Schema.Types.ObjectId, ref: "Veterinario"},
    dataHora: {type: Date, required: true },
    valorAtendimento: {type: Number, required: true},
    produtos: [{type: mongoose.Schema.Types.ObjectId, ref: "Produto"}],
    valorTotal: {type: Number, required: true}
})