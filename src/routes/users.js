const router = require('express').Router()
const ctrl = require('../controllers/users')

router.get('/', ctrl.getAll)
router.get('/:userId', ctrl.getOne)
router.post('/signup', ctrl.signup)
router.post('/login', ctrl.login)
router.get('/token', ctrl.verify)

module.exports = router
