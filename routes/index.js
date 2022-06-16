const express = require('express');
const router = express.Router();
const rout = require('./book')

router.use('/books', rout)

module.exports = router;