const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers')

router.get('/', UserController.getAllBooks);
router.get('/:id', UserController.getAllBooksById);
router.get('/:title', UserController.getAllBooksByBook);
router.post('/', UserController.createBook);
router.delete('/:id', UserController.deleteBook);
router.put('/:id', UserController.updatePrice)

module.exports=router;