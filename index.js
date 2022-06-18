const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const router = require('./routes/index')

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use('/api/v1/', router)



const start = async ()=> {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`)
        })
        await sequelize.authenticate();
        console.log('Database successfully created')
    } catch (err){
        console.log(err)
    }

}

start();