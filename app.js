// Environment variables
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
// Database
const db = require('./db')
db()

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
  res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server started on port: ${PORT}`))