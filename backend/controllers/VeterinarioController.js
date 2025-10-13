const vet = require("../schema/Veterinario")

exports.createVet = async (req, res) => {
    try{

        const v = await vet.create(req.body);
        res.status(201).json(v);

    }catch(err){
        res.status(400).json({error: err.message});
    }
};

exports.vetFindByCpf = async (req, res) =>{
     try{
          const v  = await vet.findByCpf(req.params.cpf);

          if(!v){
               res.status(404).json({error: "Veterinario não encontrado"});
          }

          res.status(200).json(v);

     }catch(err){
        res.status(500).json({erro: err.message})  
     }

 }
 
exports.updateVet = async (req, res) => {

    try{

        const v = await vet.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.status(200).json(v);

    }catch(err){
        res.status(400).json({error: err.message});
    }

}

exports.buscarComConsultas = async (req, res) => {
  try {
    const vet = await Veterinario.findOne({ crv: req.params.crv });
    if (!vet) return res.status(404).json({ mensagem: "Veterinário não encontrado" });

    // busca as consultas desse veterinário e ordena por data
    const consultas = await Consulta.find({ veterinarioCRV: req.params.crv }).sort({ dataHora: -1 });

    res.status(200).json({
      veterinario: vet,
      consultas: consultas
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }

exports.deletevet = async (req, res) => {

    await vet.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Veterinario removido com sucesso!"})

}}
