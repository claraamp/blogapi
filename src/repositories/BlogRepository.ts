import * as mysql from 'mysql2/promise';
import find from '../models/find'
import insert from '../models/insert';
import update from '../models/update';

let poolConfig = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blogapi'
};

let pool = mysql.createPool(poolConfig);



export class BlogRepository{

    async createPost(data: insert) {
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
  }
}
export default new BlogRepository();