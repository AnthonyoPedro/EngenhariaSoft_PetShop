const consulta = require("../schema/Consulta")

exports.salvarConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.create(req.body);
    res.status(200).json(consulta);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.buscarPorCrv = async (req, res) => {
  try {
    const consultas = await Consulta.find({ "veterinario.crv": req.params.crv });
    res.status(200).json(consultas);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.buscarPorNomePet = async (req, res) => {
  try {
    const consultas = await Consulta.find({ "pet.nome": req.params.nome });
    res.status(200).json(consultas);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.buscarConsultaCompleta = async (req, res) => {
  try {
    const consultas = await Consulta.find({ "veterinario.crv": req.params.crv });
    res.status(200).json(consultas);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.atualizarVeterinario = async (req, res) => {
  try {
    const consulta = await Consulta.findByIdAndUpdate(
      req.params.id,
      { veterinario: req.body.veterinario },
      { new: true }
    );
    if (!consulta) return res.status(404).json({ mensagem: "Consulta não encontrada" });
    res.status(200).json(consulta);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};
