const model = require('../models/users')
const episodesModel = require('../models/episodes')
const auth = require('../lib/auth')
const jwt = require('jsonwebtoken')

async function getOne(req, res, next){
  try {
    const userId = parseInt(req.params.userId)
    let data = await model.getOne(userId)
    res.send({data})
  } catch (e){
      next({status:404, error: `Cannot find user`})
  }
}

async function getOneByUsername(req, res, next){
  try {
    const username = req.params.username
    const id = req.params.id
    let data = await model.getOneByUsername(username, id)
    let dataId = data.id

    data.episodesReviews = await episodesModel.getLatestTen(dataId)

    res.send({data})
  } catch (e){
      next({status:404, error: `Cannot find user`})
  }
}

async function getAll(req, res, next){
  let data = await model.getAll()
  res.send({data})
}

async function getAllExcept(req, res, next){
  try {
    const userId = parseInt(req.params.userId)
    let data = await model.getAllExcept(userId)
    res.send({data})
  } catch (e){
      next({status:404, error: `Cannot find user`})
  }
}

async function signup (req, res, next) {
  try {
    const response = await model.create(req.body)
    const token = auth.createToken(response.id)
    const id = response.id
    res.status(201).json({ token, id })
  } catch (e) {
      next({ status: 400, error: `User could not be registered` })
  }
}

async function login (req, res, next) {
  try {
    const response = await model.login(req.body)
    const token = auth.createToken(response.id)
    const id = response.id
    res.json({ token, id })
  } catch (e) {
      next({ status: 401, error: `Username or password is incorrect` })
  }
}

async function verify (req, res, next) {
  try {
    const response = await auth.parseToken(req.headers.authorization)
    res.json({response})
  } catch (e) {
    next({ status: 401, error: `Please Login Again` })
  }
}

module.exports = {
  getOne, getOneByUsername, getAllExcept, getAll, signup, login, verify
}
