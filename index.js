const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const books = require('./models/books')

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

const start = async ()=> {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`)
        })
        await sequelize.authenticate();
        app.post('/', async (req, res)=>{
            await books.create({title: req.body.title,
                author: req.body.author,
                price: req.body.price,
                category: req.body.category
            })
            res.status(201).send('Book successfully created')
        })
        console.log('Database successfully created')
    } catch (err){
        console.log(err)
    }

}

start();