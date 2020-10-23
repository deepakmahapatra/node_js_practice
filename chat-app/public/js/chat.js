const socket = io()

const $messageForm = document.querySelector('#message-form')

const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $messageFormLocation = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates

const messageTemplate = document.querySelector('#message-template').innerHTML


socket.on('message', (message) => {
    const html = Mustache.render(messageTemplate, {
        message: message
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    $messageFormButton.setAttribute('disabled', 'disabled')
    const message = event.target.elements.message.value
    socket.emit('sendMessage', message, (message) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()
        console.log("The message was delivered", message)
    })
})

$messageFormLocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert("Geo location not supported by browser")
    }
    $messageFormLocation.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude}, () =>{
            $messageFormLocation.removeAttribute('disabled')
        })
    })
})