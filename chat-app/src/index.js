const app = require('./app')
const http = require('http')
const socketio = require('socket.io')

const port = process.env.PORT || 3000


const server = http.createServer(app)
const io = socketio(server)

// let count = 0

io.on('connect', (socket)=> {
    console.log("socket io connection received")

    // socket.emit('countupdated', count)
    socket.emit('message', 'Welcome')

    socket.broadcast.emit('message', 'A new user has joined')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    // socket.on('increment', () => {
    //     count++
    //     // socket.emit('countupdated', count)
    //     io.emit('countupdated', count)
    // })

    socket.on('disconnect', () => {
        io.emit("message","A user has left")
    })
})


server.listen(port, () => {
    console.log("Server is up ", port)
})