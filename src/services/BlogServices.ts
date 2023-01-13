const db = require('./db')

module.exports = {
    async insert (req,res){
         let datas = {
            "autor": req.body.autor,
             "titulo": req.body.titulo,
             "datacriado": req.body.datacriado,
             "textopost": req.body.textopost
         }
 
         try {
             let response = await db.query('INSERT INTO blog SET?', [datas]);
             res.json(response);
         } catch (error) {
             console.log(error);
           }
     },
    } 