const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/following')

router.get('/', ctrl.getAllFollowings)
router.post('/:followingId', ctrl.createFollowings)
router.delete('/:followingId', ctrl.deleteFollowings)

module.exports = router
