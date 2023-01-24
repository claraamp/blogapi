import BlogRepository from "../repositories/BlogRepository";
import post from "../models/post";


class BlogServices{

    insert = async (data:post): Promise<any | null> => {
        const result = await BlogRepository.createPost(data);
        if (!result) {
            return null;
          }
          return result;
    };

    delete = async(idpost:number) => {
        const result = await BlogRepository.deletePost(idpost);
        return result
    };

    findAll = async (): Promise<any | null> => {
        const result = await BlogRepository.findAll();
        if (!result) {
            return null;
          }
          return result;
    
    };

    findbyId = async (idpost:number) => {
        const result = await BlogRepository.findbyId(idpost)
        return result
    };

    update = async (idpost:number, data: post): Promise<any | null> => {
        const result = await BlogRepository.update(idpost, data)
        if (!result) {
            return null;
          }
          return result;
    }


}

export default new BlogServices();