const model = require('../models/series')
const episodesModel = require('../models/episodes')

async function getAll(req, res, next){
  const userId = req.params.userId
  let data = await model.getAll(userId)
  data = data.map(async element => {
    let episodes = await episodesModel.getAll(userId, element['tv_id'])

    const episodeCount = episodes.length
    element.episode_count = episodeCount
    console.log(element)
    return element
  })
  data = await Promise.all(data)

  res.send({data})
}

async function getOne(req, res, next){
  try {
    const userId = req.params.userId
    const tvId = req.params.tvId
    let data = await model.getOne(userId, tvId)
    let episodes = await episodesModel.getAll(userId, tvId)
    data.episodes = episodes
    res.send({data})
  } catch(e){
    next({
      status: 400,
      error: `User has not seen series`
    })
  }
}

async function create(req, res, next){
  try {
    const body = req.body
    let data = await model.create(req.body)
    res.status(201).send({data})
  } catch(e){
      next({
          status: 400,
          error: `Could not add series`
      })
  }
}

async function update(req, res, next){
  try {
    const userId = req.params.userId
    const tvId = req.params.tvId
    const body = req.body
    let data = await model.update(userId, tvId, body)
    let episodes = await episodesModel.getAll(userId, tvId)
    data.episodes = episodes
    res.send({data})
  } catch(e){
      next({
          status: 400,
          error: `Could not update series`
      })
  }
}

async function destroy(req, res, next){
  try {
    const userId = req.params.userId
    const tvId = req.params.tvId
    let data = await model.destroy(userId, tvId)
    res.status(204).send()
  } catch(e){
      next({
          status: 400,
          error: `Could not delete series`
      })
  }
}

module.exports = {
  getAll, getOne, create, update, destroy
}
