const express = require('express')
const taskRouter = new express.Router()
const Task = require('../models/task')

taskRouter.post('/tasks', (req, res) => {
    const task = new Task(req.body) 
    task.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

taskRouter.get('/tasks', (req, res) => {
    Task.find().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(500).send()
    })
})

taskRouter.get('/tasks/:task_id', (req, res) => {
    const task = req.params.task_id
    if (task) {
        Task.findById(task).then((result) => {
            if (result.length===0) {
                return res.status(404).send()
            }
            res.send(result)
        }).catch((error) => {
            res.status(500).send()
        })
    }
    // res.status(400).send("Send a valid request user")
    
})

module.exports = taskRouter