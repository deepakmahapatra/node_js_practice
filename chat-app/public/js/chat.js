const socket = io()

// socket.on('countupdated', (count) => {
//     console.log("The count has been updated", count)
// })

socket.on('message', (message) => {
    console.log(message)
})

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })


document.querySelector('#message-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const message = event.target.elements.message.value
    socket.emit('sendMessage', message)
})