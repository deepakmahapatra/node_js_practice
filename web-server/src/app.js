const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

const pubDirPath = path.join(__dirname, '../public')

app.use(express.static(pubDirPath))
app.get('', (req, res) => {
    res.send("Hello world")
})

app.get('help', (req, res) => {
    res.send("Help world")
})


app.listen(4300)