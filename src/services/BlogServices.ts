const db = require('./db');

module.exports = {
    async insert (req,res){
         let data = {
            "autor": req.body.autor,
             "titulo": req.body.titulo,
             "datacriado": req.body.datacriado,
             "textopost": req.body.textopost,
         }
 
         try {
             let response = await db.query('INSERT INTO blog SET?', [data]);
             res.json(response);
         } catch (error) {
             console.log(error);
           }
     },

     async findAll (req,res){
        try {
            let response = await db.query('SELECT * FROM blog')
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
     },

     async findbyId (req,res){
        let idpost = req.params.idpost;
        try {
            let response = await db.query(`SELECT * FROM blog WHERE idpost = ${idpost}`);
            res.json(response[0][0]);
        } catch (error) {
            console.log(error);
        }
     },

     async delete (req,res){
        let idpost = req.params.idpost;
        try {
            let response = await db.query(`DELETE FROM blog WHERE idpost = ${idpost}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }, 
    
    async update(req,res){
        let idpost = req.params.idpost;
        let data = {
            "autor": req.body.autor,
             "titulo": req.body.titulo,
             "datacriado": req.body.datacriado,
             "textopost": req.body.textopost,
             "idautor": req.body.idautor
         }
        try {
            let response = await db.query('UPDATE blog SET ? WHERE idpost = ?', [data, idpost]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }

    }

     }