import { Request, Response } from "express";
import BlogServices from "../services/BlogServices";
import { middlewares } from "../middlewares";

const { responses, messages, codes } = middlewares;

class BlogControllers {

    insert = async (req: Request, res: Response) => {
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
        if (!response) {
          return responses.error(codes.error(), messages.notFound(), res);
        }
        return responses.success(
          codes.created(),
          messages.created(),
          {  autor, titulo, datacriado, textopost },
          res
        );
      };


    deleteBlog = async (req, res) => {
        const { idpost } = req.params;
        
        const response = await BlogServices.delete(parseInt(idpost));
        if (!response) {
          return responses.error(codes.error(), messages.error(), res);
        }
    
        return responses.ok(codes.ok(), messages.ok(), res);
      };

      findAll = async (req, res) => {
        const response = await BlogServices.findAll();
      
        if (!response) {
          console.log("error");
        }
      
        res.status(200).send(response);
      };

      findbyId = async (req, res) => {
        const { idpost } = req.params;
        
        const response = await BlogServices.findbyId(parseInt(idpost));
        if (!response) {
          console.log("error");
        }
        res.status(200).send(response);
      };

}


export default new BlogControllers();