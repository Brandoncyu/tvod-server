const { promisify } = require('util')
const db = require('../db/knex')
const bcrypt = require('bcryptjs')

function getAllFollowings(userId) {
  return db('users_following')
    .join('users', 'users.id', '=', 'users_following.follow_id')
    .where({
      user_id: userId
    })
    .then(response => {
      return response
    })
}

function createFollowings (userId, followingId){
  return db('users_following')
    .insert({
      user_id: userId,
      follow_id: followingId
    })
    .then(response => {
      return response
    })
}

function deleteFollowings(userId, followingId) {
  return db('users_following')
    .where({
      user_id: userId,
      follow_id: followingId
    })
    .del()
    .returning('*')
    .then(response => {
      return response
    })
}

module.exports = {
  getAllFollowings, createFollowings, deleteFollowings
}
