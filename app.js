const express = require('express')
const mongoose = require('mongoose')
const DB = 'mongodb+srv://mubahsir:Mubashir12345@cluster0.6ho5a51.mongodb.net/todoApp?retryWrites=true&w=majority'
const app = express()



app.use(express.json())
mongoose.connect(DB)
const con = mongoose.connection
con.on('open', () => {
    console.log('mongodb has been connected.....')
})

const todoRouter = require('./routes/todos')

app.use('/todos', todoRouter)


app.listen(9000, () => {
    console.log('server has been satrted')
})