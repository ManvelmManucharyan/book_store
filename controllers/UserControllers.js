const UserServices = require('../service/UserServices')

class UserControllers {
    static async getAllBooks(req,res){
        const books = await UserServices.getAllBooks()
        res.status(200).send(books)
    }

}

module.exports = UserControllers;