const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})



// const me = new User({
//     "name": "Deepak",
//     "age": 29,
//     "email": "deepak@ibm.com",
//     "password": "deepak723"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })





// const task = new Task({
//     "description":  "Eat lunch"
// })


// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })