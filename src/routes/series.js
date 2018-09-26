const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/series')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, auth.isAuthorized, ctrl.getAll)
router.get('/:tvId', auth.isLoggedIn, auth.isAuthorized, ctrl.getOne)
router.post('/', auth.isLoggedIn, auth.isAuthorized, ctrl.create)
router.patch('/:tvId', auth.isLoggedIn, auth.isAuthorized, ctrl.update)
router.delete('/:tvId', auth.isLoggedIn, auth.isAuthorized, ctrl.destroy)

module.exports = router
