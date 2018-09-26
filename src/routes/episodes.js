const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/episodes')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, auth.isAuthorized, ctrl.getAll)
router.get('/:epId', auth.isLoggedIn, auth.isAuthorized, ctrl.getOne)
router.post('/', auth.isLoggedIn, auth.isAuthorized, ctrl.create)
router.patch('/:epId', auth.isLoggedIn, auth.isAuthorized, ctrl.update)
router.delete('/:epId', auth.isLoggedIn, auth.isAuthorized, ctrl.destroy)

module.exports = router
