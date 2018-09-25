const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/series')

router.get('/', ctrl.getAll)
router.get('/:tvId', ctrl.getOne)
router.post('/', ctrl.create)
router.patch('/:tvId', ctrl.update)
router.delete('/:tvId', ctrl.destroy)

module.exports = router
