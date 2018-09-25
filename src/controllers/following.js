const model = require('../models/following')

async function getAllFollowings(req, res, next){
  const userId = req.params.userId
  let data = await model.getAllFollowings(userId)
  res.send({data})
}

async function createFollowings(req, res, next){
  const userId = req.params.userId
  const followingId = req.params.followingId
  let data = await model.createFollowings(userId, followingId)
  res.send({data})
}

async function deleteFollowings(req, res, next){
  const userId = req.params.userId
  const followingId = req.params.followingId
  let data = await model.deleteFollowings(userId, followingId)
  res.send({data})
}

module.exports = {
  getAllFollowings, createFollowings, deleteFollowings
}
