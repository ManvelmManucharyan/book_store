const books = require('../models/books');
const { Op } = require("sequelize");

class BookServices {
    static async getAllBooks(){
        return books.findAll({
        });
    }
    static async getAllBooksById(id){
        return books.findByPk(id);
    }
    static async getAllBooksByBookRow(...params){
        return books.findAll({
            attributes: params
        });
    }
    static async getAllBooksByBookTitle(title){
        return books.findAll({
            where: { title },
        });
    }

    static async getAllBooksByCategory(category){
        return books.findAll({
            where: { category },
        });
    }

    static async getAllBooksByPrice(price){
        return books.findAll({
            where: {
                price: {
                    [Op.lt]: price
                }
            },
        });
    }

    static async createBook (title, author, price, category){
        await books.create({title, author, price, category})
    }

    static async deleteBook(id){
        await books.destroy({where: {id}});
    }

    static async updateInfo(params,id){
        await books.update(params, {where:{id}})
    }

}

module.exports = BookServices;