const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const {
  PORT = 5000, NODE_ENV = 'development'
} = process.env

const app = express()

if (NODE_ENV === 'development') {
  require('dotenv').load()
  app.use(morgan('dev'))
}

app.use(cors())
app.disable('x-powered-by')
app.use(bodyParser.json())


app.listen(port, () => console.log(`Listening on port: ${port}`))

module.exports = app
