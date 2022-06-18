const express = require('express');
const router = express.Router();
const UserController = require('../controllers/BookControllers')

router.get('/', UserController.getAllBooks);
router.get('/:id', UserController.getAllBooksById);
router.get('/title/:title', UserController.getAllBooksByBook);
router.get('/category/:category', UserController.getAllBooksByCategory);
router.get('/price/:price', UserController.getAllBooksByPrice);
router.post('/', UserController.createBook);
router.delete('/:id', UserController.deleteBook);
router.put('/:id', UserController.updatePrice)

module.exports=router;