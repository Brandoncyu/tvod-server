const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/episodes')

router.get('/', ctrl.getAll)
router.get('/:epId', ctrl.getOne)
router.post('/', ctrl.create)
router.patch('/:epId', ctrl.update)
router.delete('/:epId', ctrl.destroy)

module.exports = router
