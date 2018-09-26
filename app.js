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

app.use('/api/users', require('./src/routes/users'))
app.use('/api/users/:userId/interests', require('./src/routes/interests'))
app.use('/api/users/:userId/series', require('./src/routes/series'))
app.use('/api/users/:userId/series/:tvId/episodes', require('./src/routes/episodes'))
app.use('/api/users/:userId/following', require('./src/routes/following'))


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)

  const {
    status = err.status || 500,
    error = err.message || 'Something Went Wrong'
  } = err

  res.status(status).json({
    status,
    error
  })
})

app.use((req, res, next) => {
  const status = 404
  const error = `Could not ${req.method} ${req.url}`

  next({
    status,
    error
  })
})

module.exports = app
