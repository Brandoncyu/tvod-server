const { promisify } = require('util')
const db = require('../db/knex')
const bcrypt = require('bcryptjs')

function getOne(userId) {
  return db('users')
    .where({
      id: userId
    })
    .then(response => {
      return response
    })
}

function getAll() {
  return db('users')
    .returning('*')
    .then(response => {
      return response
    })
}

async function create ({ firstname, lastname, username, email, password, aboutme, values }) {
  const hashed = await promisify(bcrypt.hash)(password, 8)
  return db('users')
    .insert({ firstname, lastname, username, email, password: hashed, aboutme })
    .returning('*')
    .then(([response]) => {
      const id = response.id
      interests(id, values)
      return response
    }).catch(console.log)
}

function interests (id, values){
  values.forEach(value => {
    return db('users_interests')
      .insert({user_id: id, interest_id: value})
      .returning('*')
      .then(([response]) => {
        return response
      }).catch(console.log)
  })
}

function login ({ username, password }) {
  return db('users')
    .where({ username: username.toLowerCase() })
    .then(async ([ user ]) => {
      if (!user) throw new Error()

      const isValid = await promisify(bcrypt.compare)(password, user.password)
      if (!isValid) throw new Error()

      return user
    })
}

module.exports = {
  getOne, getAll, create, interests, login
}
