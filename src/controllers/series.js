const model = require('../models/series')
const episodesModel = require('../models/episodes')

async function getAll(req, res, next){
  const userId = req.params.userId
  let data = await model.getAll(userId)
  res.send({data})
}

async function getOne(req, res, next){
  const userId = req.params.userId
  const tvId = req.params.tvId
  let data = await model.getOne(userId, tvId)
  let episodes = await episodesModel.getAll(userId, tvId)
  data.episodes = episodes
  res.send({data})
}

async function create(req, res, next){
  const body = req.body
  let data = await model.create(req.body)
  res.send({data})
}

async function update(req, res, next){
  const userId = req.params.userId
  const tvId = req.params.tvId
  const body = req.body
  let data = await model.update(userId, tvId, body)
  let episodes = await episodesModel.getAll(userId, tvId)
  data.episodes = episodes
  res.send({data})
}

async function destroy(req, res, next){
  const userId = req.params.userId
  const tvId = req.params.tvId
  let data = await model.destroy(userId, tvId)
  res.send({data})
}

module.exports = {
  getAll, getOne, create, update, destroy
}
