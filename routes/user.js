const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers')

router.get('/', UserController.getAllBooks);
router.post('/', UserController.createBook);
router.delete('/:id', UserController.deleteBook);
router.put('/:id', UserController.updatePrice)

module.exports=router;