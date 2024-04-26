const express = require("express")
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const hostname = 'localhost'
const port = process.env.PORT || 3003

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.listen(port, () => {
    console.log(`server is running in port: http://${hostname}:${port}`)
})