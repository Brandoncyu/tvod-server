const db = require('../db/knex')

function getAll(userId) {
  return db('users_interests')
    .join('interests', 'interests.id', '=', 'users_interests.interest_id')
    .where({
      user_id: userId
    })
    .then(interests => {
      return interests
    })
}

module.exports = { getAll }
