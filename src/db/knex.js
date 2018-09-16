const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('../../knexfile')[environment]
const knex = require('knex')(knexConfig) //configuring knex to know how it fits into the database.

module.exports = knex
