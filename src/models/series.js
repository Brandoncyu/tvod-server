const { promisify } = require('util')
const db = require('../db/knex')
const bcrypt = require('bcryptjs')

function getAll(userId) {
  return db('series')
    .where({
      user_id: userId
    })
    .then(series => {
      return series
    })
}

function getOne(userId, tvId) {
  return db('series')
    .where({
      user_id: userId,
      tv_id: tvId
    })
    .then(([response]) => response)
}

function create(body){
  return db('series')
    .insert(body)
    .returning('*')
    .then(([response]) => response)
}

function update(userId, tvId, body){
  return getOne(userId, tvId)
    .then(response => {
      return db('series')
        .update({
          ...body,
          updated_at: new Date()
        })
        .where({
          user_id: userId,
          tv_id: tvId
        })
        .returning('*')
        .then(([response2]) => response2)
    })
}

function destroy(userId, tvId){
  return db('series')
    .where({
      user_id: userId,
      tv_id: tvId
    })
    .del()
    .returning('*')
    .then(([response]) => response)
}


module.exports = { getAll, getOne, create, update, destroy }
