import BlogControllers from "../src/controllers/BlogControllers"

describe('BlogControllers', () =>{
    beforeEach(() =>{
        jest.resetAllMocks();
});

describe('BlogControllers.findbyId', () => {
    it('should return blog'), async () => {
        const idpost = 5;
        const mockResponse = {
            idpost: 5,
            autor: 'clara',
            titulo: 'teste5',
            datacriado: '13/01/2023',
            textopost: 'blablabla'
        }
        BlogControllers.findbyId = jest.fn().mockResolvedValue(mockResponse);

        const result = await BlogControllers.findbyId;

        expect(result).toEqual(mockResponse);
    }

})


})