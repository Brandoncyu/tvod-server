const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/interests')

router.get('/', ctrl.getAll)

module.exports = router