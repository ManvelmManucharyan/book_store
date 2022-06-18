const UserServices = require('../service/BookServices')

class BookControllers {
    static async getAllBooks(req,res){
        const books = await UserServices.getAllBooks()
        res.status(200).send(books)
    }
    static async getAllBooksById(req,res){
        const book = await UserServices.getAllBooksById(req.params.id)
        res.status(200).send(book)
    }

    static async getAllBooksByBook(req,res){
        const book = await UserServices.getAllBooksByBook(req.params.title)
        res.status(200).send(book)
    }

    static async getAllBooksByCategory(req,res){
        const book = await UserServices.getAllBooksByCategory(req.params.category)
        res.status(200).send(book)
    }

    static async getAllBooksByPrice(req,res){
        const book = await UserServices.getAllBooksByPrice(req.params.price)
        res.status(200).send(book)
    }

    static async createBook(req, res){
        const {title,author,price,category} = req.body;
        await UserServices.createBook(title,author,price,category);
        res.status(201).send('Book successfully created');
    }

    static async deleteBook(req,res){
        await UserServices.deleteBook(req.params.id);
        res.status(201).send('Book successfully deleted')
    }

    static async updatePrice(req,res){
        await UserServices.updatePrice(req.body.price ,req.params.id)
        res.status(201).send('Book price successfully updated')
    }

}

module.exports = BookControllers;