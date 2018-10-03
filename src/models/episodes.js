const db = require('../db/knex')

function getAll(userId, tvId) {
  return db('episodes')
    .where({
      user_id: userId,
      tv_id: tvId
    })
    .then(episodes => {
      return episodes
    })
}

function getOne(userId, tvId, epId) {
  return db('episodes')
    .where({
      user_id: userId,
      tv_id: tvId,
      ep_id: epId
    })
    .then(([response]) => response)
}

function getLatestTen(userId){
  return db('episodes')
    .where({
      user_id: userId
    })
    .orderBy('updated_at', 'desc')
    .limit(10)
    .then(episodes => {
      return episodes})
}

function create(body){
  return db('episodes')
    .insert(body)
    .returning('*')
    .then(([response]) => response)
}

function update(userId, tvId, epId, body){
  return getOne(userId, tvId, epId)
    .then(response => {
      return db('episodes')
        .update({
          ...body,
          updated_at: new Date()
        })
        .where({
          user_id: userId,
          tv_id: tvId,
          ep_id: epId
        })
        .returning('*')
        .then(([response2]) => response2)
    })
}

function destroy(userId, tvId, epId){
  return db('episodes')
    .where({
      user_id: userId,
      tv_id: tvId,
      ep_id: epId
    })
    .del()
    .returning('*')
    .then(([response]) => response)
}

module.exports = { getAll, getOne, getLatestTen, create, update, destroy }
