const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User")

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://makerseok:as145792@boilerplate-shard-00-00.itfrr.mongodb.net:27017,boilerplate-shard-00-01.itfrr.mongodb.net:27017,boilerplate-shard-00-02.itfrr.mongodb.net:27017/?ssl=true&replicaSet=atlas-dkiu5s-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!~!@!@')
})

app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})