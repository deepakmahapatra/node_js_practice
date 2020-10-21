const app = require('./app')
const http = require('http')
const socketio = require('socket.io')

const port = process.env.PORT || 3000


const server = http.createServer(app)
const io = socketio(server)

io.on('connect', ()=> {
    console.log("socket io connection received")
})
server.listen(port, () => {
    console.log("Server is up ", port)
})