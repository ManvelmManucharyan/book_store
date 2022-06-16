const books = require('../models/books');

class UserServices {
    static async getAllBooks(){
        return books.findAll();
    }
    static async getAllBooksById(id){
        return books.findByPk(id);
    }
    static async getAllBooksByBook(title){
        return books.findOne({
            where: { title },
        });
    }

    static async createBook (title, author, price, category){
        await books.create({title, author, price, category})
    }

    static async deleteBook(id){
        await books.destroy({where: {id}});
    }

    static async updatePrice(price,id){
        await books.update({price}, {where:{id}})
    }

}

module.exports = UserServices;