const model = require('../models/usersInterests')

async function getAll(req, res, next){
  const userId = req.params.userId
  let data = await model.getAll(userId)
  res.send({data})
}

module.exports = {
  getAll
}
