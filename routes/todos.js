const express = require('express')
const todo = require('../models/todo.js')
const router = express.Router()
const Todo = require('../models/todo.js')


router.get('/', async (req, res) => {
    try {
        const todo = await Todo.find()
        res.json(todo)
    } catch (error) {
        console.log('ERROR')
    }
})

router.post('/', async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo
    })
    try {
        const a1 = todo.save()
        res.json(a1)
    } catch (error) {
        res.send('ERROR')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        todo.todo = req.body.todo
        const a1 = await todo.save()
        res.json(a1)
    } catch (error) {
        res.send('ERROR')
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const removeTodo = await Todo.deleteOne({ _id: req.params.id })
        res.json(removeTodo)
    } catch (err) {
        console.log('ERROR' + " " + err)
    }
})
module.exports = router