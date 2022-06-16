const books = require('../models/books');

class UserServices {
    static async getAllBooks(){
        return books.findAll();
    }

    static async createBook (title, author, price, category){
        await books.create({title, author, price, category})
    }

}

module.exports = UserServices;