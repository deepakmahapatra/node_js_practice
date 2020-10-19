const express = require('express')
const userRouter = new express.Router()
const User = require('../models/user')


userRouter.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
   

    // res.send
    // // user.save().then((result) => {
    // //     res.send(result)
    // // }).catch( (error) => {
    // //     res.status(400).send(error)
    // // })
})

userRouter.get('/users', (req, res) => {
    User.find().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(500).send()
    })
})

userRouter.get('/users/:user', (req, res) => {
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


module.exports = userRouter