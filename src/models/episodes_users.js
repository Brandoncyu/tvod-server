const db = require('../db/knex')

function getOne(userId, epId) {
  return db('episodes')
    .where({
      user_id: userId,
      ep_id: epId,
      watched: true
    })
    .then(response => {
      return response
    })
}

module.exports = { getOne }
