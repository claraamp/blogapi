import * as mysql from 'mysql2/promise';
import post from '../models/post';


let poolConfig = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blogapi'
};

let pool = mysql.createPool(poolConfig);



export class BlogRepository{

    async createPost(data: post) {

        try { 
          const sql =
                `INSERT INTO blog(autor, titulo, datacriado, textopost) VALUES ('${data.autor}','${data.titulo}','${data.datacriado}','${data.textopost}')`;
          const value = [
            data.autor,
            data.titulo,
            data.datacriado,
            data.textopost,
          ];
          const res = await pool.query(sql, value);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  async deletePost(idpost:number){
    try {
    const sql = `DELETE FROM blog WHERE idpost = ${idpost}`
    const value = [idpost]
    const res = await pool.query(sql, value);
    return res;
    } catch(error) {
      console.log(error)
    }
  };

  async findAll(){
    try {
      const sql = "SELECT * FROM blog"
      const res = await pool.query(sql)
      return res;
    } catch(error) {
      console.log(error)
    }
  };

  async findbyId (idpost:number){
    try {
      const sql = `SELECT * FROM blog WHERE idpost = ${idpost}`
      const value = [idpost]
      const res = await pool.query(sql, value);
      return res;
    } catch(error){
      console.log(error)
    }
  };

  async update (idpost:number, data:post){
    try {
      const sql = `UPDATE blog SET autor='${data.autor}', titulo='${data.titulo}', datacriado='${data.datacriado}', textopost='${data.textopost}' WHERE idpost = ${idpost}`
      const value = [
        data.autor,
        data.titulo,
        data.datacriado,
        data.textopost,
        idpost
      ]
      const res = await pool.query(sql, value);
      return res;
    } catch(error){
      console.log(error)
    }
  }

}
export default new BlogRepository();