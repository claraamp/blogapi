import BlogRepository from "../repositories/BlogRepository";
import insert from "../models/insert";
import find from "../models/find";
import update from "../models/update";

class BlogServices{
    insert = async (data:insert): Promise<insert | null> => {
        const result = await BlogRepository.createPost(data);

        if (!result) {
            return null
        }
        return result
    }
}

export default new BlogServices();