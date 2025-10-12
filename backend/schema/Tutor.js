const mongoose = require("mongoose")

const tutorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    cpf: {type: String, required: true, unique: true},
    pets: [{type: mongoose.Schema.Types.ObjectId, ref: "Pet"}]    
})

module.exports = mongoose.model("Tutor", tutorSchema);