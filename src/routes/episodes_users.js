const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/episodes_users')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, auth.isAuthorized, ctrl.getOne)

module.exports = router