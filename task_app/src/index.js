const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')
const app = express()

const port = process.env.PORT || 3000


app.use(express.json())
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
   

    res.send
    // user.save().then((result) => {
    //     res.send(result)
    // }).catch( (error) => {
    //     res.status(400).send(error)
    // })
})

app.get('/users', (req, res) => {
    User.find().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/users/:user', (req, res) => {
    const username = req.params.user
    if (username) {
        User.find({"name": username}).then((result) => {
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

app.post('/tasks', (req, res) => {
    const task = new Task(req.body) 
    task.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/tasks/:task_id', (req, res) => {
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


app.listen(port, () => {
    console.log("Server is up on port", port)
})


