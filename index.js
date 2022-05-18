const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://makerseok:as145792@boilerplate-shard-00-00.itfrr.mongodb.net:27017,boilerplate-shard-00-01.itfrr.mongodb.net:27017,boilerplate-shard-00-02.itfrr.mongodb.net:27017/?ssl=true&replicaSet=atlas-dkiu5s-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!~!@!@')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})