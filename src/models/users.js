const { promisify } = require('util')
const db = require('../db/knex')
const bcrypt = require('bcryptjs')

function getOne(userId) {
  return db('users')
    .where({
      id: userId
    })
    .first()
    .then(response => {
      if (!response) throw new Error()
      return response
    })
}

function getOneByUsername(username, id) {
  let responseId
  return db('users')
    .where({
      username: username
    })
    .select('id', 'firstname', 'lastname', 'username', 'image', 'aboutme')
    .first()
    .then(response => {
      if (!response) throw new Error()
      return db('users_following')
        .where({
          user_id: id,
          follow_id: response.id
        })
        .then(follower => {
          follower.length !== 0 ? response.following = true : response.following = false
          return db('series')
            .where({
              user_id: response.id
            })
            .then(series => {
              const allSeries = series.map(theSeries =>{
                return db('episodes')
                .where({
                  user_id: response.id,
                  tv_id: theSeries['tv_id']
                })
                .then(episodes => {
                  theSeries['episodes_watched'] = episodes.length
                  return theSeries
                })
              })
              return Promise.all(allSeries)
            })
            .then(final =>{
              response.series = final
              return response
            })
        })
      })
      .catch(console.log)
}

function getAll() {
  return db('users')
    .returning('*')
    .then(response => {
      return response
    })
}

function getAllExcept(userId) {
  return db('users')
    .whereNot({
      id: userId
    })
    .select('id', 'firstname', 'lastname', 'username', 'image', 'aboutme')
    .then(results => {
      results = results.map(result =>{
        return db('series')
          .where({
            user_id: result.id,
            watched: true,
            favorite: true
          })
          .then(series => {
            seriesNames = series.map(element => element.tv_name)
            result.favorites = seriesNames

            return result
          })
        }
      )
      results = Promise.all(results)
      return results
    })
    .then(results =>{
      results = results.map(result =>{
        return db('users_following')
          .where({
            user_id: userId,
            follow_id: result.id
          })
          .then(follower => {
            follower.length !== 0 ? result.following = true : result.following = false
            return result
          })
      })
      results = Promise.all(results)
      return results
    })
}

async function create ({ firstname, lastname, username, email, image, password, aboutme, values }) {
  const hashed = await promisify(bcrypt.hash)(password, 8)
  return db('users')
    .insert({ firstname, lastname, username, email, image, password: hashed, aboutme })
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
  getOne, getOneByUsername, getAll, getAllExcept, create, interests, login
}
