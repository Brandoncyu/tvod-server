if (process.env.NODE_ENV !== 'production') require('dotenv').load()
const { DATABASE_URL, NODE_ENV } = process.env
//sets connection to database.
const path = require('path')
const config = {
  client: 'pg',
  connection: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds')
  }
}

module.exports = {
  development: config,
  production: config,
  testing: { ...config, connection: DATABASE_URL.replace('_dev', '_test') }
}
