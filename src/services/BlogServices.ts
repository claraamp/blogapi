import BlogRepository from "../repositories/BlogRepository";
import post from "../models/post";


class BlogServices{

    insert = async (data:post): Promise<post> => {
        const result = await BlogRepository.createPost(data);
        return result
    };

    delete = async(idpost:number) => {
        const result = await BlogRepository.deletePost(idpost);
        return result
    };

    findAll = async (): Promise<post> => {
        const result = await BlogRepository.findAll();
        return result
    
    };

    findbyId = async (idpost:number) => {
        const result = await BlogRepository.findbyId(idpost)
        return result
    }


}

export default new BlogServices();