const model = require('../models/episodes')

async function getAll(req, res, next){
  const userId = req.params.userId
  const tvId = req.params.tvId
  let data = await model.getAll(userId, tvId)
  res.send({data})
}

async function getOne(req, res, next){
  const userId = req.params.userId
  const tvId = req.params.tvId
  const epId = req.params.epId
  let data = await model.getOne(userId, tvId, epId)
  res.send({data})
}

async function create(req, res, next){
  try {
    const body = req.body
    let data = await model.create(req.body)
    res.status(201).send({data})
  } catch (e) {
      next({
          status: 400,
          error: `Could not add episode`
      })
  }
}

async function update(req, res, next){
  try {
    const userId = req.params.userId
    const tvId = req.params.tvId
    const epId = req.params.epId
    const body = req.body
    let data = await model.update(userId, tvId, epId, body)
    res.send({data})
  } catch (e) {
      next({
          status: 400,
          error: `Could not update episode`
      })
  }
}

async function destroy(req, res, next){
  try {
    const userId = req.params.userId
    const tvId = req.params.tvId
    const epId = req.params.epId
    let data = await model.destroy(userId, tvId, epId)
    res.status(204).send()
  } catch (e) {
      next({
          status: 400,
          error: `Could not delete episode`
      })
  }
}

module.exports = { getAll, getOne, create, update, destroy }
