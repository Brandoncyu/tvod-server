const db = require('../db/knex')

function getAllFollowings(userId) {
  return db('users_following')
    .join('users', 'users.id', '=', 'users_following.follow_id')
    .where({
      user_id: userId
    })
    .select('follow_id', 'username', 'image')
    .then(followers => {
      let newFollowers = followers.map(follower => {
        return db('episodes')
        .where({
          user_id: follower.follow_id
        })
        .orderBy('updated_at', 'desc')
        .first()
        .then(response => {
          follower.episode_description = response
          return follower
        })
      })
       newFollowers = Promise.all(newFollowers)
       return newFollowers
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
