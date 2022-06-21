const UserServices = require('../service/BookServices')

class BookControllers {
    static async getAllBooks(req,res){
        try {
            const books = await UserServices.getAllBooks(req.query)
            res.status(200).send(books)
        }catch (err) {
            res.status(404).send("Server didn't found");
        }
    }

    static async getAllBooksById(req,res){
        try{
            const book = await UserServices.getAllBooksById(req.params.id)
            res.status(200).send(book)
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

    static async getAllBooksByBookTitle(req,res){
        try{
            const book = await UserServices.getAllBooksByBookTitle(req.params.title)
            res.status(200).send(book)
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

    static async getAllBooksByCategory(req,res){
        try{
            const book = await UserServices.getAllBooksByCategory(req.params.category)
            res.status(200).send(book)
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

    static async getAllBooksByPrice(req,res){
        try{
            const book = await UserServices.getAllBooksByPrice(req.params.price)
            res.status(200).send(book)
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

    static async createBook(req, res){
        try{
            const {title,author,price,category} = req.body;
            await UserServices.createBook(title,author,price,category);
            res.status(201).send('Book successfully created');
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

    static async deleteBook(req,res){
        try{
            await UserServices.deleteBook(req.params.id);
            res.status(201).send('Book successfully deleted')
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

    static async updateInfo(req,res){
        try{
            await UserServices.updateInfo(req.body ,req.params.id)
            res.status(201).send('Book info successfully updated')
        }catch (err){
            res.status(404).send("Server didn't found");
        }
    }

}

module.exports = BookControllers;