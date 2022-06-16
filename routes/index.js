const express = require('express');
const router = express.Router();
const rout = require('../routes/user')

router.use('/books', rout)

module.exports = router;