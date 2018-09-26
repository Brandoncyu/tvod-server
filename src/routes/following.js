const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/following')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, auth.isAuthorized, ctrl.getAllFollowings)
router.post('/:followingId', auth.isLoggedIn, auth.isAuthorized, ctrl.createFollowings)
router.delete('/:followingId', auth.isLoggedIn, auth.isAuthorized, ctrl.deleteFollowings)

module.exports = router
