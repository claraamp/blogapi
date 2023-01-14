import BlogRepository from "../repositories/BlogRepository";
import insert from "../models/insert";
import find from "../models/find";
import update from "../models/update";

class BlogServices{

    insert = async (data:insert): Promise<insert> => {
        const result = await BlogRepository.createPost(data);
        return result
    };

    delete = async(idpost:number) => {
        const result = await BlogRepository.deletePost(idpost);
        return result
    };

    findAll = async (): Promise<find> => {
        const result = await BlogRepository.findAll();
        return result
    }


}

export default new BlogServices();