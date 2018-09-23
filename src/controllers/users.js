const model = require('../models/users')
const auth = require('../lib/auth')
const jwt = require('jsonwebtoken')

async function getOne(req, res, next){
  const userId = req.params.userId
  let data = await model.getOne(userId)
  res.send({data})
}

async function getAll(req, res, next){
  let data = await model.getAll()
  res.send({data})
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
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

async function verify (req, res, next) {
  try {
    const response = await auth.isAuthorized(req)
    next()
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

module.exports = {
  getOne, getAll, signup, login, verify
}
