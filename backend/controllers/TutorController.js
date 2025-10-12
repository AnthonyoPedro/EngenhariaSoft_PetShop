const tutor = require("../schema/Tutor")

exports.createTutor = async (req, res) => {
    try{

        const t = await tutor.create(req.body);
        res.status(201).json(t);

    }catch(err){
        res.status(400).json({error: err.message});
    }
};

exports.updateTutor = async (req, res) => {

    try{

        const t = await tutor.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.status(200).json(t);

    }catch(err){
        res.status(400).json({error: err.message});
    }

}

exports.deleteTutor = async (req, res) => {

    await tutor.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Produto removido com sucesso!"})

}
