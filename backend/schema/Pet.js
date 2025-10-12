const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    especie: {type: String, required: true },
    tutor: {type: mongoose.Schema.Types.ObjectId, ref: "Tutor", required: true}
})

module.exports = mongoose.model("Pet", petSchema);