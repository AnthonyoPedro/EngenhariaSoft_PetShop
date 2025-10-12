const pet = require("../schema/Pet")

const tutor = require("../schema/Tutor")

exports.createPet = async (req, res) => {

    try{
        const p = await pet.create(req.body)
        await tutor.findByIdAndUpdate(p.tutor, {$push: {pets: p._id}})
        res.status(201).json(p);
    }catch(err){
        res.status(400).json({error: err.message})
    }
};

exports.getPetById = async (req, res) => {

    try{
         const p = await pet.findById(req.params.id).populate("tutor");
    if(!p){
        res.status(404).json({error: "Pet não encontrado"})
    }
        res.status(200).json(p);
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.deletePet = async (req, res) => {

    await pet.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Pet removido com sucesso!"})

}

exports.putPetById = async(req, res) => {
    try{
        const p = await Pet.findByIdAndUpdate(req.params.id. req.body, {new : true});
        res.status(200).json(p)
    }catch(err){
        res.status(400).json({error: err.message});
    }
} 

