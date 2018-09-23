const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/usersInterests')

router.get('/', ctrl.getAll)

module.exports = router
