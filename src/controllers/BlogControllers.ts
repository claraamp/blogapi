import BlogServices from "../services/BlogServices";

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
    }

}


export default new BlogControllers();