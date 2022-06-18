const express = require('express');
const router = express.Router();
const UserController = require('../controllers/BookControllers')

router.get('/', UserController.getAllBooks);
router.get('/:params', UserController.getAllBooksByBookRow);
router.get('/id/:id', UserController.getAllBooksById);
router.get('/title/:title', UserController.getAllBooksByBookTitle);
router.get('/category/:category', UserController.getAllBooksByCategory);
router.get('/price/:price', UserController.getAllBooksByPrice);
router.post('/', UserController.createBook);
router.delete('/:id', UserController.deleteBook);
router.put('/:id', UserController.updateInfo)

module.exports=router;