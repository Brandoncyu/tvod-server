const router = require('express').Router()
const ctrl = require('../controllers/users')

router.get('/', ctrl.getAll)
router.post('/signup', ctrl.signup)
router.post('/login', ctrl.login)
router.get('/token', ctrl.verify)
router.get('/:userId/except', ctrl.getAllExcept)
router.get('/:userId', ctrl.getOne)
router.get('/:id/username/:username/', ctrl.getOneByUsername)

module.exports = router
