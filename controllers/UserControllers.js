const UserServices = require('../service/UserServices')

class UserControllers {
    static async getAllBooks(req,res){
        const books = await UserServices.getAllBooks()
        res.status(200).send(books)
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

module.exports = UserControllers;