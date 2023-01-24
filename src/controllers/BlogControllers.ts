import { Request, Response } from "express";
import BlogServices from "../services/BlogServices";
import { middlewares } from "../middlewares";


class BlogControllers {

    insert = async (req,res) => {
        const {
            autor,
            titulo,
            datacriado,
            textopost,
        } : {
            autor: string;
            titulo: string;
            datacriado: Date;
            textopost: string;
        } = req.body;

        const response = await BlogServices.insert({
            autor,
            titulo,
            datacriado,
            textopost,
        });
        res.status(200).send(response)
    };

    deleteBlog = async (req, res) => {
        const { idpost } = req.params;
        
        const response = await BlogServices.delete(parseInt(idpost));
        res.status(200).send();
      };

      findAll = async (req, res) => {
        const response = await BlogServices.findAll();
      
        if (!response) {
          console.log("error");
        }
      
        res.status(200).send(response);
      };

}


export default new BlogControllers();