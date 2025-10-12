const produto = require("../schema/Produto")

exports.createProduto = async (req, res) =>{
   try{
        const p = await produto.create(req.body);
        res.status(201).json(p);
   } catch(err){
        res.status(400).json({erro : err.message})
   }
 }

 exports.produtoFindById = async (req, res) =>{
     try{
          const p  = await produto.findById(req.params.id);

          if(!p){
               res.status(404).json({error: "Produto não encontrado"});
          }

          res.status(200).json(p);

     }catch(err){
        res.status(500).json({erro: err.message})  
     }

 }
    
 exports.produtoFindAll = async (req, res) =>{
          try{
               const produtos = await produto.find();
               res.status(200).json(produtos)
          }catch(err){
               res.status(500).json({erro : err.message})
          }  
               
     }
          
     
 exports.deleteProduto = async (req, res) => {

    await produto.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Produto removido com sucesso!"})

}

exports.putProdutoById = async(req, res) => {
    try{
        const p = await produto.findByIdAndUpdate(req.params.id. req.body, {new : true});
        res.status(200).json(p)
    }catch(err){
        res.status(400).json({error: err.message});
    }
}   
     

