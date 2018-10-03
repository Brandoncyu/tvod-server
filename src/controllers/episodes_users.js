const model = require('../models/episodes_users')

async function getOne(req, res, next){
  const userId = req.params.userId
  const epId = req.params.epId
  let data = await model.getOne(userId, epId)
  res.send({data})
}

module.exports = { getOne }
